"use client"

import { useEffect, useRef } from "react"

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      connections: Particle[]

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.2
        this.speedY = (Math.random() - 0.5) * 0.2
        this.color = this.getRandomColor()
        this.alpha = Math.random() * 0.5 + 0.1
        this.connections = []
      }

      getRandomColor() {
        const colors = [
          "rgba(236, 72, 153, 1)", // Pink
          "rgba(139, 92, 246, 1)", // Purple
          "rgba(34, 211, 238, 1)", // Cyan
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) {
          this.x = 0
        } else if (this.x < 0) {
          this.x = canvas.width
        }

        if (this.y > canvas.height) {
          this.y = 0
        } else if (this.y < 0) {
          this.y = canvas.height
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color.replace("1)", `${this.alpha})`)
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 150)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect particles
    const connectParticles = () => {
      const maxDistance = 150
      for (let i = 0; i < particles.length; i++) {
        particles[i].connections = []
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            particles[i].connections.push(particles[j])
          }
        }
      }
    }

    // Draw connections
    const drawConnections = () => {
      if (!ctx) return
      for (const particle of particles) {
        for (const connection of particle.connections) {
          const dx = particle.x - connection.x
          const dy = particle.y - connection.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const alpha = 1 - distance / 150

          ctx.beginPath()
          ctx.strokeStyle = particle.color.replace("1)", `${alpha * 0.2})`)
          ctx.lineWidth = 0.5
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(connection.x, connection.y)
          ctx.stroke()
        }
      }
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      connectParticles()
      drawConnections()
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

export default ParticleNetwork

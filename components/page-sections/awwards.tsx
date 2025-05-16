"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { Badge } from '../ui/badge'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowRight, Award } from 'lucide-react'

const Awwards = () => {
  return (
    <section id="awards" className="relative z-10 py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <Badge className="bg-white/5 text-fuchsia-400 hover:bg-white/10 transition-colors px-3 py-1 mb-4 backdrop-blur-sm border border-white/10">
          <Award className="w-3 h-3 mr-1" /> Recognition
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
          Award-Winning Education
        </h2>
        <p className="text-white/70 text-lg">
          Our commitment to excellence in crypto education has been
          recognized by leading industry organizations worldwide.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "GUINNESS RECORD HOLDER",
            description: "Most Nationalities in a Trading Lesson",
            image: "/gr.png",
            color: "from-blue-600 to-cyan-600",
          },
          {
            title: "Blockchain",
            description:
              "Blockchain is a global market for trading currencies.",
            image: "/ft.png",
            color: "from-amber-600 to-yellow-600",
          },
          {
            title: "PROFX AWARDS DUBAI 2024",
            description: "Best Forex Academy Of The Year 2024",
            image: "/pwd.png",
            color: "from-orange-600 to-red-600",
          },
          {
            title: "MONEY CONCLAVE 2024",
            description: "Best Crypto & Blockchain Educator Of The Year",
            image: "/mc.png",
            color: "from-cyan-600 to-blue-600",
          },
        ].map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${award.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300`}
            ></div>
            <Card className="relative bg-[#0D0D25]/60 backdrop-blur-md border border-white/10 overflow-hidden h-full flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-6 relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${award.color} rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div className="relative w-full p-2 h-full rounded-full overflow-hidden border border-white/10">
                  <img
                    src={award.image || "/placeholder.svg"}
                    alt={award.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg text-white font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-cyan-400 transition-colors">
                {award.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {award.description}
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/50 hover:text-white mt-auto"
              >
                Learn more <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Awwards

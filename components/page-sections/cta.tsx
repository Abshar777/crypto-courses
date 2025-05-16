"use client"

import { useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef } from "react"

const Cta = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div className="w-full p-[10px]">
      <section
        id="cta"
        className="relative bg-pink-500/5 rounded-lg border-pink-500/30 border w-full z-10 py-20 overflow-hidden"
        ref={ref}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex flex-col justify-between items-start w-full md:w-1/2 gap-8 z-10">
            <h2 className="text-4xl font-bold text-white">
              Powered by{" "}
              <span className="relative z-10 uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 animate-gradient">
                Delta Trading
              </span>
            </h2>
            <p className="text-white/80 max-w-md">
              Get access to our exclusive community and stay updated with the latest news and trends in the crypto
              world.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg text-white font-medium"
            >
              Join Now
            </motion.button>
          </div>

          <motion.div
            className="flex justify-center items-center"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
          >
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
             
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              <motion.img
                src="/deltaLogo.jpeg"
                alt="Delta Trading Logo"
                className="w-full h-full object-contain"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                style={{
                  filter: "drop-shadow(0 0 10px rgba(219, 39, 119, 0.4))",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-transparent blur-3xl"
        
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </section>
    </div>
  )
}

export default Cta

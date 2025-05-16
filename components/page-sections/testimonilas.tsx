"use client"
import { motion } from "framer-motion"
import { Badge } from "../ui/badge"
import { Sparkles } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { testimonials } from "@/constants/testimonials"

const Testimonilas = () => {
  return (
    <section id="testimonials" className="relative z-10 py-20">
        <div className="absolute inset-0 bg-[#0D0D25]/30 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="bg-white/5 text-fuchsia-400 hover:bg-white/10 transition-colors px-3 py-1 mb-4 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-3 h-3 mr-1" /> Success Stories
            </Badge>
            <h2 className="text-4xl  md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
              What Our Students Say
            </h2>
            <p className="text-white/70 text-lg">
              Join thousands of successful students who have transformed their
              careers with our cutting-edge crypto education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300`}
                ></div>
                <Card className="relative bg-[#0D0D25]/60 backdrop-blur-md border border-white/10 overflow-hidden h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div
                          className={`absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full blur opacity-70`}
                        ></div>
                        <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 relative">
                          <img
                            src={`/avatar.webp`}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-white/70">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/80 italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default Testimonilas

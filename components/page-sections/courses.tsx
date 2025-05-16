"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <section id="courses" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <Badge className="bg-white/5 text-cyan-400 hover:bg-white/10 transition-colors px-3 py-1 mb-4 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-3 h-3 mr-1" /> Top Courses
            </Badge>
            <h2 className="text-4xl text-white md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
              Popular Learning Paths
            </h2>
          </div>
          <Button
            variant="ghost"
            className="text-white/70 hover:text-white flex items-center gap-2"
          >
            View All Courses <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Crypto Mania",
              level: "Beginner Level Program",
              lessons: 24,
              offer: "25% off",
              finalPrice: "3000AED",
              price: "4000AED",
              image: "/c1.png",
              pdf: "/pdf/1.pdf",
              duration: "20 hours",
              color: "from-fuchsia-600 to-purple-600",
              description:
                "Perfect for newcomers to the crypto world. Learn the fundamentals of blockchain, how cryptocurrencies work, basic trading concepts, and wallet security.",
              topics: [
                "Blockchain Fundamentals",
                "Crypto Wallets",
                "Market Analysis",
                "Security Basics",
                "Onchain analsis",
                "Airdrops",
                "ICO",
              ],
            },
            {
              title: "Crypto Mastery",
              level: "Intermediate Level Program",
              lessons: 32,
              offer: "20% off",
              finalPrice: "8000AED",
              price: "10000AED",
              pdf: "/pdf/2.pdf",
              image: "/c2.png",
              duration: "50 hours",
              color: "from-purple-600 to-cyan-600",
              description:
                "Take your crypto knowledge to the next level with advanced trading strategies, technical analysis, portfolio management, and risk assessment techniques.",
              topics: [
                "Technical Analysis",
                "Trading Psychology",
                "Portfolio Management",
                "Risk Mitigation",
                "Running Blockchain nodes",
                "Defi Deep dive",
                "Narrative trading",
                "Advanced analytics",
                "Web3 Development",
              ],
            },
          ].map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300`}
              ></div>
              <Card className="relative bg-[#0D0D25]/60 backdrop-blur-md border border-white/10 overflow-hidden h-full flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D25] to-transparent z-10"></div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-sm text-white border border-white/10">
                    {course.level}
                  </Badge>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl text-white font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-cyan-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-white/70 mb-4">{course.description}</p>

                  <div className="mt-4 mb-6">
                    <h4 className="text-sm font-semibold text-white/90 mb-2">
                      What you'll learn:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-white/70"
                        >
                          <CheckCircle className="w-3 h-3 mr-2 text-cyan-400" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-white/70 text-sm">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-white text-xl">
                        {course.finalPrice}
                      </div>
                      <div className="line-through text-white/50 text-sm">
                        {course.price}
                      </div>
                      <div className="text-white/50 text-sm">
                        {course.offer}
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        window.open(course.pdf);
                      }}
                      className="relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-cyan-400"></span>
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
                      <span className="relative z-10">Enroll Now</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

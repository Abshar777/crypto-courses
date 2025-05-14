"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Code,
  Cpu,
  ExternalLink,
  Globe,
  Layers,
  Sparkles,
  Users,
  Zap,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import CryptoCanvas from "@/components/crypto-canvas";
import ParticleNetwork from "@/components/particle-network";
import { useMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { FlipWords } from "@/components/flip-words";
import Hero from "@/components/page-sections/hero";

export default function Home() {
  const isMobile = useMobile();
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxValue = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-[#030014] to-[#030014]"></div>
        <ParticleNetwork />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden group">
              <Image
                style={{ filter: "hue-rotate(75deg)" }}
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Web3<span className="text-fuchsia-500">DeCoder</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["Courses", "Resources", "Community", "About"].map((item, i) => (
              <Link
                key={i}
                href="#"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Hero scrollY={scrollY} />

      {/* Features Section */}
      <section className="relative z-10 py-20">
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
              <Sparkles className="w-3 h-3 mr-1" /> Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
              Cutting-Edge Crypto Education
            </h2>
            <p className="text-white/70 text-lg">
              Our courses are designed by industry experts and blockchain
              pioneers to give you the most relevant and up-to-date knowledge in
              the rapidly evolving crypto space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-fuchsia-400" />,
                title: "Comprehensive Curriculum",
                description:
                  "From blockchain fundamentals to advanced DeFi strategies, our courses cover every aspect of the crypto ecosystem.",
              },
              {
                icon: <Code className="w-6 h-6 text-cyan-400" />,
                title: "Hands-On Projects",
                description:
                  "Build real-world dApps, smart contracts, and trading algorithms with guided practical exercises.",
              },
              {
                icon: <Users className="w-6 h-6 text-fuchsia-400" />,
                title: "Expert Instructors",
                description:
                  "Learn from blockchain developers, crypto fund managers, and Web3 pioneers with years of industry experience.",
              },
              {
                icon: <Layers className="w-6 h-6 text-cyan-400" />,
                title: "Blockchain Certification",
                description:
                  "Earn verifiable credentials stored on-chain to showcase your expertise to potential employers.",
              },
              {
                icon: <Globe className="w-6 h-6 text-fuchsia-400" />,
                title: "Global Community",
                description:
                  "Connect with fellow crypto enthusiasts, share insights, and build your network in our exclusive community.",
              },
              {
                icon: <Zap className="w-6 h-6 text-cyan-400" />,
                title: "Real-Time Updates",
                description:
                  "Stay ahead with course content that evolves with the market, reflecting the latest trends and technologies.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <Card className="relative bg-[#0D0D25]/60 backdrop-blur-md border border-white/10 h-full overflow-hidden group-hover:bg-[#0D0D25]/80 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-fuchsia-600/20 group-hover:to-cyan-400/20 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl text-white font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white/70">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
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

      {/* Popular Courses */}
      <section className="relative z-10 py-20">
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

          {/* {
                  title: "crypto mania",
                  tag: "4000AED ",
                  offer: "25% off",
                  finalPrice: "3000AED ",
                  img: "/img/c1.png",
                  delay: "0.15",
                  direction: "left",
                },
                {
                  title: "Mastery crypto",
                  tag: "10000AED ",
                  offer: "20% off",
                  finalPrice: "8000AED ",
                  img: "/img/c2.png",
                  delay: "0.30",
                  direction: "right",
                }, */}
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
                color: "from-fuchsia-600 to-purple-600",
                description:
                  "Perfect for newcomers to the crypto world. Learn the fundamentals of blockchain, how cryptocurrencies work, basic trading concepts, and wallet security.",
                topics: [
                  "Blockchain Fundamentals",
                  "Crypto Wallets",
                  "Market Analysis",
                  "Security Basics",
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
                color: "from-purple-600 to-cyan-600",
                description:
                  "Take your crypto knowledge to the next level with advanced trading strategies, technical analysis, portfolio management, and risk assessment techniques.",
                topics: [
                  "Technical Analysis",
                  "Trading Psychology",
                  "Portfolio Management",
                  "Risk Mitigation",
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

      {/* Testimonials */}
      <section className="relative z-10 py-20">
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
            {[
              {
                name: "Alex Thompson",
                role: "Blockchain Developer",
                image:
                  "professional%20male%20blockchain%20developer%20portrait",
                content:
                  "The DeFi course completely changed my career trajectory. I went from a traditional software developer to landing a job at a top crypto startup within 3 months of completing the course.",
                color: "from-fuchsia-600 to-purple-600",
              },
              {
                name: "Sarah Chen",
                role: "Crypto Fund Manager",
                image:
                  "professional%20female%20crypto%20fund%20manager%20portrait",
                content:
                  "The technical analysis and trading strategies I learned helped me increase my portfolio by 340% in one year. The instructors break down complex concepts in a way that's easy to understand and apply.",
                color: "from-purple-600 to-cyan-600",
              },
              {
                name: "Michael Rodriguez",
                role: "NFT Artist",
                image: "creative%20male%20nft%20digital%20artist%20portrait",
                content:
                  "As an artist with no technical background, I was intimidated by NFTs. This course guided me step by step, and now I've successfully launched two NFT collections that sold out within hours.",
                color: "from-cyan-600 to-fuchsia-600",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.color} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300`}
                ></div>
                <Card className="relative bg-[#0D0D25]/60 backdrop-blur-md border border-white/10 overflow-hidden h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div
                          className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.color} rounded-full blur opacity-70`}
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
                      "{testimonial.content}"
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


      {/* Footer */}
      <footer className="relative z-10 bg-[#0D0D25]/80 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden group">
                  <Image
                    style={{ filter: "hue-rotate(75deg)" }}
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  Web3<span className="text-fuchsia-500">DeCoder</span>
                </span>
              </div>
              <p className="text-white/70 mb-4">
                The leading platform for blockchain and cryptocurrency
                education, empowering the next generation of Web3 builders.
              </p>
              <div className="flex gap-4">
                {["twitter", "discord", "github", "youtube"].map(
                  (social, i) => (
                    <a
                      key={social}
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors relative group"
                    >
                      <span className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300"></span>
                      <span className="relative z-10">
                        <span className="sr-only">{social}</span>
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Courses
              </h4>
              <ul className="space-y-2">
                {[
                  "Blockchain Basics",
                  "Smart Contracts",
                  "DeFi Protocols",
                  "NFT Creation",
                  "Crypto Trading",
                  "Web3 Development",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Resources
              </h4>
              <ul className="space-y-2">
                {[
                  "Blog",
                  "Tutorials",
                  "Documentation",
                  "Podcast",
                  "Community",
                  "Support",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Company
              </h4>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Careers",
                  "Partners",
                  "Press",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2025 web3Decoders. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

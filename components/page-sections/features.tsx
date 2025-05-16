"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import {
  BookOpen,
  Code,
  Users,
  Layers,
  Globe,
  Zap,
  Sparkles,
} from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="relative z-10 py-20">
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
            Our courses are designed by industry experts and blockchain pioneers
            to give you the most relevant and up-to-date knowledge in the
            rapidly evolving crypto space.
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
              title: "In-Depth Crypto Insights",
              description:
                "Gain a deep understanding of cryptocurrencies, tokenomics, and blockchain use cases through detailed case studies and expert analysis.",
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
  );
};

export default Features;

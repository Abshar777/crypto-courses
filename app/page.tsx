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
import Courses from "@/components/page-sections/courses";
import Awwards from "@/components/page-sections/awwards";
import Features from "@/components/page-sections/features";
import Header from "@/components/global/header";
import Testimonilas from "@/components/page-sections/testimonilas";
import Footer from "@/components/global/footer";
import Cta from "@/components/page-sections/cta";
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
      <Header />
      {/* Hero Section */}
      <Hero scrollY={scrollY} />

      {/* Features Section */}
      <Features />
      <Awwards />

      {/* Popular Courses */}
      <Courses />
      <Cta />

      {/* Testimonials */}
      <Testimonilas />
      {/* Footer */}
      <Footer />
    </div>
  );
}

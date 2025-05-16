"use client"
import React from 'react'
import Image from 'next/image'
import { IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link'
import { ExternalLink, Github, Mail, Twitter } from 'lucide-react'
import { navItems } from '@/constants/nav';

const Footer = () => {
  return (
    <footer id="footer" className="relative z-10 bg-[#0D0D25]/80 backdrop-blur-sm border-t border-white/10 py-12">
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
            {[{
                icon: <IoLogoWhatsapp />,  
                href: "https://wa.link/z7re0z"
            },  {
                icon: <Mail />,
                href: "mailto:web3Decoders@gmail.com"
            }].map((social, i) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors relative group"
                >
                  <span className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-400 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300"></span>
                  <span className="relative z-10">
                    <span className="sr-only">{social.icon}</span>
                    {social.icon}
                  </span>
                </a>
              )
            )}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Links
          </h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Courses
          </h4>
          <ul className="space-y-2">
            {[
              "Crypto Mania",
              "Crypto Mastery",
              
           
            ].map((item) => (
              <li key={item}>
                <a
                  href="#courses"
                  className="text-white/70 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Contact Details
          </h4>
          <ul className="space-y-2">
            {[
              "Email: web3Decoders@gmail.com",
              "Phone: +1234567890",
              "Address: 1234 Main St, Anytown, USA",
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
  )
}

export default Footer

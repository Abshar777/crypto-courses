"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { navItems } from "@/constants/nav";     
const Header = () => {
  return (
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
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
        <Button onClick={() => window.open("https://wa.link/z7re0z", "_blank")} className="text-white/70 bg-gradient-to-r from-fuchsia-500 to-cyan-400 border-none outline-none hover:text-white">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;

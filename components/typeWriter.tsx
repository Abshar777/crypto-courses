"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterCodeProps {
  children: string;
  className?: string;
}

const TypewriterCode: React.FC<TypewriterCodeProps> = ({ children, className = '' }) => {
  const [text, setText] = useState('');
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const contentRef = useRef<HTMLPreElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isInView) return;
    
    let i = 0;
    const typingSpeed = 15; // ms per character
    const textContent = children as string;
    
    const typingInterval = setInterval(() => {
      if (i < textContent.length) {
        setText(textContent.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setIsCursorVisible(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [children, isInView]);
  
  return (
    <pre ref={contentRef} className={className}>
      <code>
        {text}
        <motion.span
          animate={{ opacity: isCursorVisible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block w-2 h-4 bg-cyan-400 ml-0.5"
        />
      </code>
    </pre>
  );
};

export default TypewriterCode;
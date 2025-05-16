"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!formData.name || !formData.email) {
      setError("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Phone number validation
    if (
      formData.number &&
      !/^\d{10,15}$/.test(formData.number.replace(/\D/g, ""))
    ) {
      setError("Please enter a valid phone number");
      return;
    }

    // If validation passes, set submitting state and submit the form
    setIsSubmitting(true);
    setError("");

    // Get the form element and submit it
    const form = document.getElementById("contactForm") as HTMLFormElement;
    form.submit();
  };

  // When the form is submitting, show success message after a delay
  useEffect(() => {
    if (isSubmitting) {
      const timer = setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setFormData({ name: "", email: "", number: "", message: "" });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitting]);

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-300">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300">
            Have questions or want to learn more? Drop us a message and we'll
            get back to you soon.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-violet-900/20 rounded-2xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-violet-400" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-300 mb-6">
                  We'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  //   variant="outline"
                  className="border-violet-500/50 hover:bg-violet-500/10"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                id="contactForm"
                method="POST"
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2HytmGWD9q8te-2s4WP_k936vYLf1YIiMfiH0qLA1BEiz_Q/formResponse"
                target="_blank"
                onSubmit={handleSubmit}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-200">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="entry.2005620554"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-black/50 border-violet-900/30 focus:border-violet-500 h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-200">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="entry.1045781291"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-black/50 border-violet-900/30 focus:border-violet-500 h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="number" className="text-gray-200">
                      Phone Number
                    </Label>

                    <PhoneInput
                      country={"ae"}
                      value={formData.number}
                      onChange={(value, data, event, formattedValue) => {
                        setFormData({
                          ...formData,
                          number: formattedValue,
                        });
                      }}
                      containerClass="phone-input-container"
                      inputStyle={{
                        width: "100%",
                        height: "40px",
                        fontSize: "16px",
                        backgroundColor: "rgb(0 0 0 / 0.5)",
                        color: "white",
                        border: "1px solid rgb(76 29 149 / 0.3)",
                        borderRadius: "0.5rem",
                      }}
                      dropdownStyle={{
                        backgroundColor: "rgb(0 0 0 / 0.9)",
                        backdropFilter: "blur(10px)",
                        color: "white",
                      }}
                      buttonStyle={{
                        backgroundColor: "rgb(0 0 0 / 0.5)",
                        borderColor: "rgb(76 29 149 / 0.3)",
                        borderRadius: "0.5rem 0 0 0.5rem",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-200">
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      name="entry.839337160"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className="bg-black/50 border-violet-900/30 focus:border-violet-500 min-h-[120px]"
                    />
                  </div>

                  {error && (
                    <div className="text-red-400 text-sm py-2">{error}</div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 h-12 text-base"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

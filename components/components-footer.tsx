"use client";

import Link from "next/link";
import Image from "next/image";
import SocialIcons from "@/app/components/header/SocialIcons";
import navItems from "@/app/components/header/navItems";
import { useState, FormEvent } from "react";

// Define the type for the newsletter form submission
interface NewsletterForm {
  email: string;
}

export default function FooterComponent() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Handle newsletter form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate newsletter subscription (replace with your API call)
    try {
      setMessage("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="py-12 bg-[#FBE8D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-xl font-bold">flushing(tech)</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Welcome to flushing(tech). Join us on our journey to make a difference.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "https://www.meetup.com/flushing-tech", label: "Learn More" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { href: "/about#faq-section", label: "FAQ" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          {/* <div> */}
          {/*   <h3 className="text-lg font-semibold mb-4">Stay Connected</h3> */}
          {/*   <p className="text-gray-400 text-sm mb-4"> */}
          {/*     Subscribe to our newsletter for the latest updates. */}
          {/*   </p> */}
          {/*   <form onSubmit={handleSubmit} className="flex flex-col space-y-2"> */}
          {/*     <input */}
          {/*       type="email" */}
          {/*       value={email} */}
          {/*       onChange={(e) => setEmail(e.target.value)} */}
          {/*       placeholder="Enter your email" */}
          {/*       className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" */}
          {/*       required */}
          {/*     /> */}
          {/*     <button */}
          {/*       type="submit" */}
          {/*       className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors duration-200" */}
          {/*     > */}
          {/*       Subscribe */}
          {/*     </button> */}
          {/*     {message && ( */}
          {/*       <p */}
          {/*         className={`text-sm ${ */}
          {/*           message.includes("Thank") ? "text-green-400" : "text-red-400" */}
          {/*         }`} */}
          {/*       > */}
          {/*         {message} */}
          {/*       </p> */}
          {/*     )} */}
          {/*   </form> */}
          {/* </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <nav className="hidden md:block">
          <div className="flex justify-end items-center">
            <SocialIcons />
          </div>
        </nav>
        </div>
      </div>
    </footer>
  );
}

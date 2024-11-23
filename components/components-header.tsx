"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SocialIcons from "@/app/components/header/SocialIcons";
import navItems from "@/app/components/header/navItems";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-peach">
      <div className="flex justify-between items-center h-16">
        {/* logo */}
        <div className="flex-shrink-0 px-4">
          <Link
            href="/"
            className="text-2xl text-primary"
            style={{ fontFamily: "Gintronic, sans-serif" }}
          >
            flushing
            <span className="text-site_orange">
              (<span className="text-site_red">tech</span>)
            </span>
          </Link>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <div className="flex justify-end items-center">
            <ul className="flex space-x-8 block mr-8">
              {navItems.map(
                (item) =>
                  item.faIcon === undefined && (
                    <li key={item.text}>
                      <Link
                        href={item.href}
                        className="text-primary hover:text-site_orange transition-colors duration-300 text-xl font-site_nav_item"
                      >
                        {item.text}
                      </Link>
                    </li>
                  )
              )}
            </ul>
            <SocialIcons />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden px-4">
          <button
            onClick={toggleMenu}
            className="text-primary hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className="text-primary hover:text-site_orange block px-3 py-2 rounded-md text-base font-medium font-site_nav_item"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link"

const navItems = [
  { text: 'Events', href: '/events' },
  { text: 'Github', href: 'https://github.com/your-org' },
  { text: 'Meetup', href: 'https://meetup.com/your-group' },
  { text: 'Discord', href: 'https://discord.gg/your-invite' },
  { text: 'Contact', href: '/contact' },
]

export default function HeaderComponent() {
  return (
    <header className="bg-secondary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl"
          style={{ fontFamily: "Gintronic, sans-serif" }}
        >
          <span className="text-primary">c.tech</span>
          <span className="text-accent">(flushing)</span>
        </Link>
        <nav aria-label="Main Navigation" className="ml-auto">
          <ul className="flex list-none space-x-11">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.href}
                  className="text-primary hover:text-accent transition-colors duration-200 text-3xl"
                  style={{
                    fontFamily: "Gintronic, sans-serif",
                  }}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
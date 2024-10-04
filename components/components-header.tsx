"use client";

import Link from "next/link"

const navItems = [
  { text: 'Events', href: '/events' },
  { text: 'Github', href: 'https://github.com/flushingtech' },
  { text: 'Meetup', href: 'https://www.meetup.com/flushing-tech/' },
  { text: 'Discord', href: 'https://discord.gg/xGgFcZknDR' },
]

export default function HeaderComponent() {
  return (
    <header className="flex justify-between items-center bg-[#FFE4CE] h-11 ">
      {/* logo */}
      <div className="ml-10">

        <Link
          href="/"
          className="text-2xl"
          style={{ fontFamily: "Gintronic, sans-serif" }}
          >
          <span className="text-primary">c.tech(flushing)</span>
        </Link>
          </div>
        
      {/* nav links */}
        <nav aria-label="Main Navigation" className="mr-5">
          <ul className="flex list-none space-x-16">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.href}
                  className="text-primary hover:underline transition-colors duration-200 text-2xl"
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
    </header>
  );
}
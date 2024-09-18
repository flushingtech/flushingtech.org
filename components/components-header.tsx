'use client'

import Link from "next/link"

export default function HeaderComponent() {
  return (
    <header className="bg-[#1E2A3A] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <span className="text-white">c.tech</span>
          <span className="text-[#FF6B35]">(flushing)</span>
        </Link>
        <nav className="space-x-4">
          <Link href="#events" className="hover:text-[#FF6B35]">Events</Link>
          <Link href="#github" className="hover:text-[#FF6B35]">Github</Link>
          <Link href="#meetup" className="hover:text-[#FF6B35]">Meetup</Link>
          <Link href="#discord" className="hover:text-[#FF6B35]">Discord</Link>
          <Link href="#contact" className="hover:text-[#FF6B35]">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
'use client'

import HeroComponent from "@/components/components-hero"
import {GridLayout } from "@/components/components-projects"
import ConnectWithUsComponent from "@/components/components-connect-with-us"
import Benefits from "./components/benefits/Benefits"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#FBE8D8]">
      <HeroComponent />
      <GridLayout />
      <ConnectWithUsComponent />
      <Benefits />
    </div>
  )
}

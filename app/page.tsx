'use client'

import HeroComponent from "@/components/components-hero"
import ProjectsComponent from "@/components/components-projects"
import ConnectWithUsComponent from "@/components/components-connect-with-us"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#FBE8D8]">
      <HeroComponent />
      <ProjectsComponent />
      <ConnectWithUsComponent />
    </div>
  )
}
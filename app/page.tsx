'use client'

import HeroComponent from "@/components/components-hero"
import {GridLayout, ProjectsCarouselComponent} from "@/components/components-projects"
import ConnectWithUsComponent from "@/components/components-connect-with-us"
import FooterComponent from "@/components/components-footer"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#FBE8D8]">
      <HeroComponent />
      <GridLayout />
      <ConnectWithUsComponent />
      <FooterComponent />
    </div>
  )
}
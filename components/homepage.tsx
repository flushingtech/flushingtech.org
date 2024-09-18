'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HomepageComponent() {
  return (
    <div className="min-h-screen bg-[#FBE8D8] text-gray-900">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="bg-[#1E2A3A] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            Meet <span className="text-[#FF6B35]">Flushing Tech</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Libero eleifend auctor posuere volutpat rhoncus laoreet.
          </p>
          <Button variant="outline" className="text-white border-white hover:bg-[#FF6B35] hover:text-white">
            Learn More
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Check Out Our Projects!</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Project Image"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">Project Title</h3>
              <p className="text-lg mb-6">
                Lorem ipsum odor amet, consectetuer adipiscing elit. At curabitur lobortis conubia dolor mi tellus egestas fringilla. Sodales felis turpis fusce erat purus tempor arcu ornare habitant. Lacinia augue montes ridiculus quam, faucibus dictum sem.
              </p>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="bg-[#1E2A3A] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Connect With Us!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-transparent border-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Bi-Weekly Tech Jams</h3>
                <Image
                  src="/placeholder.svg"
                  alt="Tech Jams"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
              </CardContent>
            </Card>
            <Card className="bg-transparent border-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <Image
                  src="/placeholder.svg"
                  alt="Office Hours"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
              </CardContent>
            </Card>
            <Card className="bg-transparent border-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Happy Hour</h3>
                <Image
                  src="/placeholder.svg"
                  alt="Happy Hour"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
              </CardContent>
            </Card>
            <Card className="bg-transparent border-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Virtual Hackathons</h3>
                <Image
                  src="/placeholder.svg"
                  alt="Virtual Hackathons"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-12 max-w-3xl mx-auto">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent ut senectus sagittis fermentum montes morbi nostra elementum. Justo efficitur tristique id aliquam dignissim fusce finibus parturient.
          </p>
          <div className="text-center mt-8">
            <Button variant="outline" className="text-white border-[#FF6B35] hover:bg-[#FF6B35]">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
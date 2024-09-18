'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ConnectWithUsComponent() {
  return (
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
  )
}
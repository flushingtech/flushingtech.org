'use client'

import Image from "next/image"

export default function ProjectsComponent() {
  return (
    <section className="py-20 bg-[#FBE8D8]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Check Out Our Projects!</h2>
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
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Project Title</h3>
            <p className="text-lg mb-6 text-gray-700">
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
  )
}
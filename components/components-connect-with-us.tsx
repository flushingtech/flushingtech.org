"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function ConnectWithUsComponent() {
  return (
    <section className="bg-blue text-peach py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Connect With Us!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44 gap-y-12">
          <div>
            <h3 className="text-2xl text-center mb-5">Bi-Weekly Tech Jams</h3>
            <Card className="bg-transparent border-white">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg"
                  alt="Tech Jams"
                  width={600}
                  height={200}
                  className="rounded-lg mb-4"
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl text-center mb-5 ">Office Hours</h3>
            <Card className="bg-transparent border-white">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg"
                  alt="Tech Jams"
                  width={600}
                  height={200}
                  className="rounded-lg mb-4"
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl text-center mb-5">Happy Hour</h3>
            <Card className="bg-transparent border-white">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg"
                  alt="Tech Jams"
                  width={600}
                  height={200}
                  className="rounded-lg mb-4"
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl text-center mb-5 ">Virtual Hackathons</h3>
            <Card className="bg-transparent border-white">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg"
                  alt="Tech Jams"
                  width={600}
                  height={200}
                  className="rounded-lg mb-4"
                />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <p className="w-2/3 text-xl">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent ut
            senectus sagittis fermentum montes morbi nostra elementum. Justo
            efficitur tristique id aliquam dignissim fusce finibus parturient.
          </p>
        </div>
      </div>
    </section>
  );
}

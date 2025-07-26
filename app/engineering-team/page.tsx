'use client';

import Image from 'next/image';
import { Users, Code2, CircuitBoard } from 'lucide-react';

const teamMembers = [
  {
    name: 'Tamer Khattab',
    title: 'Lead Software Engineer',
    image: '/images/team/tamer.jpg', // Make sure this exists in /public/images/team
    role: 'Frontend & backend dev. Builds scalable apps and leads hackathon infra.',
  },
  {
    name: 'Layla Ahmad',
    title: 'UX Designer',
    image: '/images/team/layla.jpg',
    role: 'Designs beautiful, user-friendly interfaces with a strong eye for detail.',
  },
  {
    name: 'Choi Park',
    title: 'Full Stack Developer',
    image: '/images/team/choi.jpg',
    role: 'Builds full-stack systems and keeps the Vercel backend humming.',
  },
];

export default function EngineeringTeamPage() {
  return (
    <div className="bg-[#FBE8D8] min-h-screen px-6 py-16 sm:px-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">Meet the Engineering Team</h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          The brains behind Flushing Tech’s hackathons, platform, and vision. Here’s the team making it all possible.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={member.image}
                alt={member.name}
                className="rounded-full object-cover"
                fill
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{member.title}</p>
            <p className="text-sm text-gray-700">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <Users className="w-8 h-8 text-site_navy" />
          <h2 className="text-2xl font-semibold">Join Our Team</h2>
          <p className="text-muted-foreground max-w-lg">
            We're always looking for passionate engineers, designers, and creatives. Reach out if you'd like to build the future of Flushing Tech with us.
          </p>
        </div>
      </div>
    </div>
  );
}

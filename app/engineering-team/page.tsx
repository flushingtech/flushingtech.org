'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users } from 'lucide-react';

type Contributor = {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

export default function EngineeringTeamPage() {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const res = await fetch(
          'https://api.github.com/repos/flushingtech/flushingtech.org/contributors'
        );
        if (!res.ok) throw new Error('Failed to fetch contributors');
        const data = await res.json();
        setContributors(data);
      } catch (error) {
        console.error('GitHub fetch error:', error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <div className="bg-[#FBE8D8] min-h-screen px-6 py-16 sm:px-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">Meet the Engineering Team</h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          The brains behind Flushing Tech’s hackathons, platform, and vision.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {contributors.map((contributor) => (
          <div
            key={contributor.login}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={contributor.avatar_url}
                alt={contributor.login}
                className="rounded-full object-cover"
                fill
              />
            </div>
            <h3 className="text-xl font-semibold">{contributor.login}</h3>
            <p className="text-sm text-gray-500 mb-2">
              {contributor.contributions} commits
            </p>
            <Link
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              View GitHub
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <Users className="w-8 h-8 text-site_navy" />
          <h2 className="text-2xl font-semibold">Join Our Team</h2>
          <p className="text-muted-foreground max-w-lg">
            We're always looking for passionate engineers. Contribute to the repo and see yourself here!
          </p>
        </div>
      </div>
    </div>
  );
}

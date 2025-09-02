'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { handleRSS } from '@/app/components/utils/rss';
import { Events } from '@/types/events';

const DEFAULT_LISTING = 'https://www.meetup.com/flushing-tech/events/';

export default function Hackathon() {
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    if (router) {
      (async () => {
        try {
          const items = (await handleRSS()) as Events[];
          if (items && items.length > 0) {
            const eventLink = items[0].info.link;
            if (!cancelled) router.replace(eventLink);
          }
        } catch {
          if (!cancelled) router.replace(DEFAULT_LISTING);
        }
      })();
    }
    return () => {
      cancelled = true;
    };
  }, [router]);

  return (
    <main className="fixed inset-0 z-[9999] flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-peach via-peach to-white">
      <div className="p-4 text-center">
        <p>Redirecting to the event page...</p>
        <p>
          If you are not redirected,{' '}
          <a className="underline" href={DEFAULT_LISTING}>
            open the events list
          </a>
          .
        </p>
      </div>
    </main>
  );
}

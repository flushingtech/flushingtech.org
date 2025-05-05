'use client';
import { parseRSS } from '@/lib/client/rss';
import events from '@/events.json';

const titleCorrespondence: { [key: string]: string } = {
  'Bi-Weekly Tech Jams': 'Flushing Tech Bi-Weekly Hackathon',
  'Office Hours': 'Flushing Tech: Office Hour',
  'Happy Hour': 'Flushing Tech Happy Hour',
  'Virtual Hackathons': 'Flushing Tech Virtual Hackathon',
};

const rssUrl = 'https://www.meetup.com/flushing-tech/events/rss';

export async function handleRSS(url: string = rssUrl) {
  try {
    const xmlDoc = await parseRSS(url);
    const items: Element[] = Array.from(xmlDoc.querySelectorAll('item'));
    events.forEach(event => {
      const convertedTitle = titleCorrespondence[event.title];
      const latest = items.find((item: Element) => {
        const title = item.querySelector('title');
        return title?.textContent === convertedTitle;
      });
      if (latest != undefined) {
        const link = latest?.querySelector('guid')?.textContent;
        event.info.link = link as string;
      }
    });
  } catch (err) {
    console.error('Error fetching or parsing RSS feed:', err);
  }
  return events;
}

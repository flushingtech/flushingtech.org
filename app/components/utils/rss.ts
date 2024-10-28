"use client";
import { parseRSS } from "@/lib/client/rss";
import events from "@/events.json";

const titleCorrespondence = {
	"Bi-Weekly Tech Jams": "Flushing Tech Bi-Weekly Hackathon",
	"Office Hours": "Flushing Tech: Office Hour",
	"Happy Hour": "Flushing Tech Happy Hour",
	"Virtual Hackathons": "Flushing Tech Virtual Hackathon",
};

const rssUrl = "https://www.meetup.com/flushing-tech/events/rss";

export async function handleRSS(url: string = rssUrl) {
	try {
		const xmlDoc = await parseRSS(url);
		const items = Array.from(xmlDoc.querySelectorAll("item"));
		events.forEach((event, i) => {
			const convertedTitle = titleCorrespondence[event.title];
			const latest = items.find((item) => {
				const title = item.querySelector("title");
				return title.textContent === convertedTitle;
			});
			if (latest != undefined) {
				const link = latest.querySelector("guid").textContent;
				event.info.link = link;
			}
		});
	} catch (err) {
		throw err;
	} finally {
		return events;
	}
}

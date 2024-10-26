"use client";
import { fetchRSS } from "@/app/actions/rss.ts";

export async function parseRSS(url) {
	try {
		const xml = await fetchRSS(url);
		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(xml, "text/xml");
		return xmlDoc;
	} catch (err) {
		throw err;
	}
}

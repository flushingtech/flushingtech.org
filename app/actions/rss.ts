"use server";

export async function fetchRSS(url: string) {
	try {
		const res = await fetch(url);
		if (res.ok) {
			const output = await res.text();
			return output;
		} else {
			throw Error(res.status);
		}
	} catch (err) {
		throw err;
	}
}

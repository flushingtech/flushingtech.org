'use server';

export async function fetchRSS(url: string): Promise<string> {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const output = await res.text();
      return output;
    } else {
      throw Error(res.status.toString());
    }
  } catch (err) {
    console.error('Error fetching RSS feed:', err);
    throw err;
  }
}

import { TRace } from './types/race.type';

async function getData<T>(
  endpoint: string,
  reqOptions?: RequestInit,
): Promise<T> {
  try {
    const res = await fetch(
      `http://localhost:8002/api/${endpoint}`,
      reqOptions,
    );
    return res.json();
  } catch (error) {
    console.log(error);
    throw Error(`Failed to fetch data from ${endpoint}`, { cause: error });
  }
}

// Revalidates every 4 hours
export async function fetchRaces(): Promise<TRace[]> {
  return getData<TRace[]>('races', {
    next: { revalidate: 4 * 1000 * 60 * 60 },
  });
}

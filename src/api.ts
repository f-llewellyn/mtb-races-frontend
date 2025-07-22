import { get } from './lib/api';
import { TRace } from './types/race.type';

// Revalidates every 4 hours
export async function fetchRaces(): Promise<TRace[]> {
  const fromDatetime = new Date().toISOString();
  return get<TRace[]>(`/races?from=${fromDatetime}`, {
    tags: ['races'],
    revalidate: 4 * 1000 * 60 * 60,
  });
}

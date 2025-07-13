import { get } from './lib/api';
import { TRace } from './types/race.type';

// Revalidates every 4 hours
export async function fetchRaces(): Promise<TRace[]> {
  return get<TRace[]>('/races', {
    tags: ['races'],
    revalidate: 4 * 1000 * 60 * 60,
  });
}

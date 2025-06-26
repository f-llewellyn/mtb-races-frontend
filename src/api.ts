import { getData } from './lib/api';
import { TRace } from './types/race.type';

// Revalidates every 4 hours
export async function fetchRaces(): Promise<TRace[]> {
  return getData<TRace[]>('/races', {
    next: { tags: ['races'] },
  });
}

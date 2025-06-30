import { getData } from './lib/api';
import { TRace } from './types/race.type';

// Revalidates every 4 hours
export async function fetchRaces(): Promise<TRace[]> {
  return getData<TRace[]>('/races', {
    next: {
      // Revalidate every 4 hours, or on demand
      revalidate: 4 * 60 * 60,
      tags: ['races'],
    },
  });
}

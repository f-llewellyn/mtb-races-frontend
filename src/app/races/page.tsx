import { fetchRaces } from '@/api';
import { Navbar } from '@/components/Navbar';
import { RaceItem } from '@/components/RaceItem';
import { TRace } from '@/types/race.type';
import { Suspense } from 'react';

export default async function Page() {
  const races = await fetchRaces();

  const racesMappedByDate: Record<string, TRace[]> = {};

  races.forEach((race) => {
    const { date } = race;

    if (racesMappedByDate[date]) {
      racesMappedByDate[date].push(race);
    } else {
      racesMappedByDate[date] = [race];
    }
  });
  const raceDates = Object.keys(racesMappedByDate).sort();

  return (
    <>
      <Navbar />
      <div className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <Suspense fallback={'Loading...'}>
          {raceDates.map((raceDate) => {
            const dateString = new Date(raceDate).toLocaleDateString('en-GB', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            });

            const races = racesMappedByDate[raceDate];

            const isWeekend =
              dateString.includes('Sat') || dateString.includes('Sun');

            const dateBg = isWeekend
              ? 'from-green-500 to-green-400'
              : 'from-gray-800 to-gray-700';

            return (
              <div className="mb-4" key={dateString}>
                <p
                  className={`mb-2 w-full rounded-md bg-gradient-to-r px-4 py-2 text-white shadow-md ${dateBg}`}>
                  {dateString}:
                </p>
                {races.map((race) => (
                  <RaceItem race={race} key={race.id} />
                ))}
              </div>
            );
          })}
        </Suspense>
      </div>
    </>
  );
}

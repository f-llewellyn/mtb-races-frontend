import { Sources } from '@/enums/Sources.enum';
import { TRace } from '@/types/race.type';
import { ExternalLink } from 'lucide-react';

interface IRaceItemProps {
  race: TRace;
}

const borderColourMap = {
  [Sources.SI_ENTRIES]: 'border-red-500',
  [Sources.BRITISH_CYCLING]: 'border-blue-800',
};

export function RaceItem({ race }: IRaceItemProps) {
  const borderColour = borderColourMap[race.source] ?? 'border-gray-800';

  return (
    <div className="mb-2 flex flex-col content-center rounded-md bg-gray-200 text-gray-700">
      <div
        className={`flex grow items-center justify-between gap-2 rounded-t-md border-l-5 ${borderColour} p-2`}>
        <p className="font-bold">{race.name}</p>
        <a href={race.detailsUrl} target="_blank">
          <ExternalLink className="text-blue-400" />
        </a>
      </div>
      <div className="bg-gray-100 px-4 py-2 text-sm">
        {race.type && (
          <p>
            Type: <span className="font-bold">{race.type}</span>
          </p>
        )}
        {race.location && (
          <p>
            Location: <span className="font-bold">{race.location}</span>
          </p>
        )}
      </div>
    </div>
  );
}

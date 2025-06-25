import { RaceTypes } from '@/enums/RaceTypes.enum';
import { Sources } from '@/enums/Sources.enum';

export type TRace = {
  id: number;
  name: string;
  type: RaceTypes;
  location: string;
  detailsUrl: string;
  date: string;
  hashedId: string;
  source: Sources;
  createdAt: string;
  updatedAt: string;
};

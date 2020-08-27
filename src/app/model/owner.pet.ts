import { Pet } from './pet';

export interface OwnerPet {
  name?: string;
  gender?: string;
  age?: number;
  pets?: Pet[];
}

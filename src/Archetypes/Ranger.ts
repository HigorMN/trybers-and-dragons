import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _count = 0;
  private _type: EnergyType;
  
  constructor(name: string) {
    super(name);
    Ranger._count += 1;
    this._type = 'stamina';
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Ranger._count;
  }
}

export default Ranger;
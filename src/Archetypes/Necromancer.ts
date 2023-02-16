import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _count = 0;
  private _type: EnergyType;
  
  constructor(name: string) {
    super(name);
    Necromancer._count += 1;
    this._type = 'mana';
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._count;
  }
}

export default Necromancer;
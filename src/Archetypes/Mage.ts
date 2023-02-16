import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _count = 0;
  private _type: EnergyType;
  
  constructor(name: string) {
    super(name);
    Mage._count += 1;
    this._type = 'mana';
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Mage._count;
  }
}

export default Mage;
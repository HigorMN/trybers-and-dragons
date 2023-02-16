import Race from './Race';

class Halfling extends Race {
  private static count = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.count;
  }
}

export default Halfling;
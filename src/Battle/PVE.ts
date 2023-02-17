import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _fighter: Fighter, 
    private _monsters: SimpleFighter[],
  ) {
    super(_fighter);
    this._monsters = _monsters;
  }

  private attackMonster(monster: SimpleFighter): void {
    this.player.attack(monster);
    if (monster.lifePoints > 0) monster.attack(this.player);
  }

  private filterAliveMonsters(): SimpleFighter[] {
    return this._monsters.filter((monster) => monster.lifePoints > 0);
  }

  public fight(): number {
    while (this.player.lifePoints > 0 && this._monsters.length) {
      this._monsters = this.filterAliveMonsters();
      if (this._monsters.length) {
        this._monsters.forEach((enemy) => this.attackMonster(enemy));
      }
    }
    return super.fight();
  }
}

export default PVE;
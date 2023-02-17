import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

type FighterOrMonsterOrCharacter = 
  Fighter | SimpleFighter | Monster | Character ;

class PVE extends Battle {
  constructor(
    private _fighter: Character | Fighter, 
    private _monsters: FighterOrMonsterOrCharacter[],
  ) {
    super(_fighter);
    this._monsters = _monsters;
  }

  private attackMonster(monster: FighterOrMonsterOrCharacter): void {
    this.player.attack(monster);
    if (monster.lifePoints > 0) monster.attack(this.player);
  }

  private filterAliveMonsters(): FighterOrMonsterOrCharacter[] {
    return this._monsters.filter((monster) => monster.lifePoints > 0);
  }

  public fight(): number {
    if (this.player.lifePoints > 0 && this._monsters.length) {
      this._monsters = this.filterAliveMonsters();
      if (this._monsters.length) {
        this._monsters.forEach((enemy) => this.attackMonster(enemy));
      }
    }
    return super.fight();
  }
}

export default PVE;
import { IPrototype } from "../interface/iprototype.interface";
import { BaseEntity } from "./base-entity";

export class Enemy extends BaseEntity {
  constructor(name: string, attackDamage: number, health: number) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }

  clone(): IPrototype {
    return new Enemy(this.name, this.attackDamage, this.health);
  }
}

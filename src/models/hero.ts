import { BaseEntity } from "./base-entity";

export class Hero extends BaseEntity {
  constructor(name: string, attackDamage: number) {
    super(name);
    this.attackDamage = attackDamage;
  }

  public salute(): void {
    console.log(`Hello! My name is ${this.name}`);
  }
}

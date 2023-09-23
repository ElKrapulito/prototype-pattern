import { IPrototype } from "../interface/iprototype.interface";

export abstract class BaseEntity implements IPrototype {
  name: string;
  attackDamage: number = 1;
  health: number = 100;

  constructor(name: string) {
    this.name = name;
  }

  attack(entity: BaseEntity): void {
    console.log("-------------------------------------\n");
    console.log(`${this.name} is performing an attack to ${entity.name}`);
    entity.health -= this.attackDamage;
    console.log(`${this.name} did a damage of ${this.attackDamage}`);
    console.log(`${entity.health} of health is left in ${entity.name}`);
    console.log("\n-------------------------------------");
  }

  abstract clone(): IPrototype;
}

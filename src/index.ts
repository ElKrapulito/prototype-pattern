import { Enemy } from "./models/enemy";
import { Hero } from "./models/hero";

const hero: Hero = new Hero("Sam", 20);

const enemy1: Enemy = new Enemy("Vampire", 3, 50);

const enemy2: Enemy = <Enemy>enemy1.clone();
enemy2.attackDamage = 5;

hero.attack(enemy1);
enemy1.attack(hero);
enemy2.attack(hero);

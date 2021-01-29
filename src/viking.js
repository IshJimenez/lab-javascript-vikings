// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack () {
        return this.strength
    }
    receiveDamage (damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
}
    receiveDamage (damage){

        this.health -= damage

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
        battleCry() {
            return `Odin Owns You All!`
        }
}
// Saxon
class Saxon extends Soldier{

    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage (damage){

        this.health -= damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    vikingArmy = []
    saxonArmy = []

    addViking(unit){
        this.vikingArmy.push(unit);
    }

    addSaxon(soldi){
        this.saxonArmy.push(soldi);
    }

vikingAttack() {
    let luckySoldier = getRandomInt(this.vikingArmy.length);
    let unluckySoldier = getRandomInt(this.saxonArmy.length);
    this.saxonArmy[unluckySoldier].receiveDamage(
      this.vikingArmy[luckySoldier].strength
    );

    if (this.saxonArmy[unluckySoldier].health <= 0) {
      this.saxonArmy.splice(unluckySoldier, 1);
      return "A Saxon has died in combat";
    } else {
      return `A Saxon has received ${this.vikingArmy[luckySoldier].strength} of damage!`;
    }
}
saxonAttack() {
    let luckySoldier = getRandomInt(this.saxonArmy.length);
    let unluckySoldier = getRandomInt(this.vikingArmy.length);
    this.vikingArmy[unluckySoldier].receiveDamage(
      this.saxonArmy[luckySoldier]?.strength
    );

    if (this.vikingArmy[unluckySoldier].health <= 0) {
      this.vikingArmy.splice(unluckySoldier, 1);
      return "A Viking has fallen";
    } else {
      return `${this.vikingArmy[unluckySoldier].name} has received ${this.saxonArmy[luckySoldier].strength} points of damage`;
    }
}

showStatus() {
  if (this.saxonArmy.length == 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length == 0) {
    return "Saxons have fought for their lives and survived another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
}

let viking = new Viking("Spongebob", 350, 300);
let saxon = new Saxon(200, 325);

let krustyCrab = new War();

krustyCrab.addSaxon(saxon);
krustyCrab.addViking(viking);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

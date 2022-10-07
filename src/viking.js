// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage";
        }
        else { return this.name + " has died in act of combat"; }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage";
        }
        else { return "A Saxon has died in combat"; }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking);

    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let saxonD = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        for (let i = 0; i < this.saxonArmy.length; i++) {
            if (this.saxonArmy[i].health <= 0) {
                this.saxonArmy.splice(i);
            }

        }
        return saxonD
    }
    saxonAttack() {
       let vikingD = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
        for (let i = 0; i < this.vikingArmy.length; i++) {
            if (this.vikingArmy[i].health <= 0) {
                this.vikingArmy.splice(i);
            }
        }
        return vikingD
    }

    showStatus() {
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length === 0 ){
            return "Saxons have fought for their lives and survived another day..."
        }
        else if(this.saxonArmy.length>=1 && this.vikingArmy.length>=1){
            return "Vikings and Saxons are still in the thick of battle."
        }
     }
}

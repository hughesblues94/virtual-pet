const MAX_FITNESS = 10;
const MAX_AGE = 30;
const MIN_AGE = 0
const MAX_HUNGER = 10;
const MIN_HUNGER = 0;
const MIN_FITNESS = 0


function Pet(name) {
    this.name = name;
    this.age = MIN_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;

}

Pet.prototype = {
    get isAlive() {
        return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MIN_FITNESS;
    }
}

Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    }
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    }
    if ((this.fitness + 4) <= MAX_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAX_FITNESS;
    }
}

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw "Your pet is no longer alive :("
    }
    if (this.hunger < 3) {
        return this.hunger = MIN_HUNGER
    } else {
        return this.hunger -= 3;
    }
}
Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if (this.hunger >= 5 && this.fitness <= 3) {
        return `I am hungry AND I need a walk`;
    } else if (this.hunger >= 5) {
        return `I am hungry`;
    } else if (this.fitness <= 3) {
        return `I need a walk`
    } else {
        return `I feel great!`;
    }
}

Pet.prototype.haveBaby = function (child) {
    this.children = [child];
}
module.exports = Pet;
const Pet = require('../src/pet');

describe('constructor', () => {
    test('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    test('sets the name property', () => {
        const pet = new Pet("Fido");

        expect(pet.name).toEqual("Fido")
    })
    test('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    })
});

describe('growUp', () => {
    test('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.age).toEqual(1);
    })
    test('increase hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();

        expect(pet.hunger).toEqual(5)
    })
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toEqual(2);
    });
    it('hunger does not go below 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });
});

describe('check up', () => {
    it("if the pet's fitness is 3 or less, it should return 'I need a walk'", () => {
        const pet = new Pet('Fido');
        pet.fitness = 3

        expect(pet.checkUp()).toBe('I need a walk')
    })
    it("if the pet's hunger is 5 or more, it should return 'I am hungry'", () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;

        expect(pet.checkUp()).toBe('I am hungry');
    })
    it("if both of the above are true, it should return 'I am hungry AND I need a walk'", () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.fitness = 3;

        expect(pet.checkUp()).toBe(`I am hungry AND I need a walk`);
    })
    it("if both of the above are false, it should return 'I feel great!'", () => {
        const pet = new Pet('Fido');
        pet.hunger = 4;
        pet.fitness = 4;

        expect(pet.checkUp()).toBe(`I feel great!`);
    })
})


const Pet = require('../src/pet');

describe ('constructor', () => {
    it ('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });


    it('has a initial age of 0', () => {
        const pet = new Pet ('Fido');
        expect(pet.age).toEqual(0);
    });


    it ('has a initail hunger of 0', () => {
        const pet = new Pet ('Fido');
        expect(pet.hunger).toEqual(0);
    })


    it('has a intital fitness of 10', () => {
        const pet = new Pet ('Fido');
        expect (pet.fitness).toEqual(10);
    })
});



describe ('growUp',() => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
        });
    
    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);   
        });

    it('decreases the fitness by 3', () => {
        const pet = new Pet ('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7)
        });
});




describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('fido')
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });

    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    })
});



    describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido')
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(2);
    });
});  
    

describe('checkUp', () => {
    it('checks pets fitness is <= 3', () => {
        const pet = new Pet('Fido');
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I need a Walk')
    })
    
    it('checks pets hunger is >= 5', () => {
        const pet = new Pet ('Fido');
        pet.hunger = 6;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am Hungry')
    })
});

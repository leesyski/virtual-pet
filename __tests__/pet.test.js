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
    
    it('has the ability to take on child as an array', () =>{
        const pet = new Pet ('Fido');
        expect (pet.children).toEqual([]);
    });
});



describe ('growUp',() => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(pet.feed).toThrow('Your pet is no longer alive:(');
    });
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
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(pet.feed).toThrow('Your pet is no longer alive:(');
    });

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
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(pet.feed).toThrow('Your pet is no longer alive:(');
    });
    
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido')
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(2);
    });
});  
    

describe('checkUp', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(pet.feed).toThrow('Your pet is no longer alive:(');
    });

    it('check fitness and hunger, if both levels are ok then ', () => {
        const pet = new Pet ('Fido');
        pet.hunger = 4
        pet.fitness = 4
        pet.checkUp();
        expect(pet.checkUp()).toBe('I feel great');
    });
    
    it('checks both fitness and hunger', () => {
        const pet = new Pet('Fido');
        pet.hunger = 6;
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });
    
    it('checks pets fitness is <= 3', () => {
        const pet = new Pet('Fido');
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I need a walk')
    });
    
    it('checks pets hunger is >= 5', () => {
        const pet = new Pet ('Fido');
        pet.hunger = 6;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I am hungry')
    });



describe('haveBaby', () => {
    it('adds a child to the parent', ()  => {
        let parent = new Pet('Dave');
        let child = new Pet('Amelia')
        parent.haveBaby(child);
        expect(parent.children[0]).toEqual({ name: 'Amelia', age: 0, hunger: 0, fitness: 10 });
    });
});


});

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
    });
    //it('increments the hunger by 5', () => {
        //const pet = new Pet('Fido');
        //pet.growUp();
        //expect(pet.hunger).toEqual(5);    
//});

    //need to confirm this test
describe ('hunger',() => {
    it('increments the hunger by 5 per year', () => {
       const pet = new Pet ('Fido');
        pet.hunger();
        expect(pet.hunger).toEqual(5);
    });
});
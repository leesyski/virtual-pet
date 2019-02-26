    
    
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
        this.age += 1;
        //this.hunger += 5;
}

Pet.prototype.hunger = function() {
        if (this.age === 1){
            this.hunger = this.hunger += 5;
}
    
};



module.exports = Pet;
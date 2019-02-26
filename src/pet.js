const MAXIMUM_FITNESS = 10;
const WALK_POINTS = 4;
    
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype.growUp = function() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
};

Pet.prototype.walk = function(){
   if ((this.fitness + WALK_POINTS) <= MAXIMUM_FITNESS){
       this.fitness += WALK_POINTS;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
   }


module.exports = Pet;
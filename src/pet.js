const MAXIMUM_FITNESS = 10;
const WALK_POINTS = 4;
const FEED_POINTS = 3;
const MINIMUM_HUNGER = 0;
    
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype.growUp = function() {
    // can we refacor these?
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
   };

Pet.prototype.feed = function(){
    if ((this.hunger - FEED_POINTS) >= MINIMUM_HUNGER){
        this.hunger -= FEED_POINTS;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
}


module.exports = Pet;
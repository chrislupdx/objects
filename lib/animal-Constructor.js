function animalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

animalConstructor.prototype.speak = function() {
  return `hi i r ${this.name}`;
};

let dogFactory = function(name, species) {
  return {
    name,
    species,
    sayHi() {
      return `hi i r ${this.name}`;
    }
  };
};


module.exports = {
  animalConstructor,
  dogFactory,
};

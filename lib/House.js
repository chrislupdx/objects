class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
  price() {
    return (this.floors + 
    this.bathrooms + 
    this.bedrooms) * 1;
  }
}

module.exports = {
  House,
};

const { Car } = require('../lib/Car.js');

describe('car tests', () => {
  let car = null;
  beforeEach(() => {
    car = new Car('make1', 'model1', 'year1', 'color1', 150);
  });
 
  test('car items exist', () => {
    expect(car.make).toEqual('make1');
    expect(car.model).toEqual('model1');
    expect(car.year).toEqual('year1');
    expect(car.color).toEqual('color1');
    expect(car.miles).toEqual(0);

  });
  
  test('drivenmiles', () => {
    expect(car.drive(15)).toEqual(15);
  });

  test('can be driven', () => {
    expect(car.drive(2)).toEqual(2);
  });
});


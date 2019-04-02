const { House } = require('../lib/House.js');

describe('house tests', () => {

  test('test items exist', () =>{
    const home = new House('nowhere', '0', 1000, 1);
    expect(home.location).toEqual('nowhere');
    expect(home.floors).toEqual('0');
    expect(home.bedrooms).toEqual(1000);
    expect(home.bathrooms).toEqual(1);
  });
  test('see if price works', () => {
    const home = new House('somewhere', 1, 2, 3);
    expect(home.price()).toEqual(6);

  });

});

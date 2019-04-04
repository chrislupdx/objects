const { Colors } = require('../lib/Colors.js');

describe('colors tests', () => {
  let colors = null;

  beforeEach(() => {
    colors = new Colors();
  });
    
  test('color class has list of favorite colors', () => {
    expect(colors.favorites).toEqual([]);
  });
  
  test('addColor functionality', () => {
    colors.addColor('blue');
    expect(colors.favorites).toEqual(['blue']);
  });
});

const { mapearDoble, siguienteDelDoble, caracDesdeStr } = require('../index');


describe('prueba funciones', function () {

  // mapearDoble
  it('mapearDoble deberia devolverme el doble de todos los elementos', function () {
    expect(mapearDoble([1,2,3,4,5])).toEqual([2, 4, 6, 8, 10]);
  });

  // siguienteDelDoble
  it('siguienteDelDoble deberia devolverme el doble del siguiente de todos los elementos', function () {
    expect(siguienteDelDoble([1,2,3,4,5])).toEqual([3, 5, 7, 9, 11]);
  });

  // caracDesdeStr
  it('caracDesdeStr deberia devolverme caracter correspondiente al string numérico', function () {
    expect(caracDesdeStr('64')).toEqual('A');
  });

})

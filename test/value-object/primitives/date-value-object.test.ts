// test/value-object/primitives/date-value-object.test.ts (NUEVO)

import { DateValueObject } from '../../../src/value-object/primitives/date-value-object';

// 1. Creamos una clase "hija" de prueba para instanciar la clase abstracta
class MockDateObject extends DateValueObject {
  // Implementamos el método abstracto
  protected throwErrorForInvalidDate(value: string): void {
    throw new Error(`La fecha <${value}> es inválida`);
  }
}

describe('DateValueObject', () => {

  const validDateStr = '2023-01-01T12:00:00Z';
  const invalidDateStr = 'esto no es una fecha';

  // 2. Probamos el constructor
  describe('Constructor', () => {
    it('debería crear un objeto si la fecha es válida', () => {
      const dateObj = new MockDateObject(validDateStr);
      // Comprueba que el formato ISO se aplicó
      expect(dateObj.value).toBe('2023-01-01T12:00:00.000Z');
    });

    it('debería lanzar un error si la fecha es inválida', () => {
      // Usamos .toThrow para verificar que la lógica de error funciona
      expect(() => new MockDateObject(invalidDateStr))
        .toThrow(`La fecha <${invalidDateStr}> es inválida`);
    });
  });

  // 3. Probamos los métodos públicos
  describe('Métodos de comparación', () => {
    const dateObj = new MockDateObject(validDateStr); // Se crea con '2023-01-01'

    // isBeforeThisDate
    it('debería retornar true si la fecha es anterior', () => {
      expect(dateObj.isBeforeThisDate('2023-01-02T00:00:00Z')).toBe(true);
    });
    it('debería retornar false si la fecha es posterior', () => {
      expect(dateObj.isBeforeThisDate('2022-12-31T00:00:00Z')).toBe(false);
    });

    // isAfterThisDate
    it('debería retornar true si la fecha es posterior', () => {
      expect(dateObj.isAfterThisDate('2022-12-31T00:00:00Z')).toBe(true);
    });
    it('debería retornar false si la fecha es anterior', () => {
      expect(dateObj.isAfterThisDate('2023-01-02T00:00:00Z')).toBe(false);
    });

    // isBetweenTheDates
    it('debería retornar true si la fecha está en el rango', () => {
      expect(dateObj.isBetweenTheDates('2022-01-01', '2024-01-01')).toBe(true);
    });
    it('debería retornar false si la fecha está fuera del rango', () => {
      expect(dateObj.isBetweenTheDates('2020-01-01', '2022-01-01')).toBe(false);
    });

    // Pruebas de error en métodos
    it('debería lanzar un error si una fecha de comparación es inválida', () => {
      expect(() => dateObj.isBeforeThisDate(invalidDateStr))
        .toThrow(`La fecha <${invalidDateStr}> es inválida`);
      
      expect(() => dateObj.isAfterThisDate(invalidDateStr))
        .toThrow(`La fecha <${invalidDateStr}> es inválida`);
        
      expect(() => dateObj.isBetweenTheDates(validDateStr, invalidDateStr))
        .toThrow(`La fecha <${invalidDateStr}> es inválida`);
    });
  });

});
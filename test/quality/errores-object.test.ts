// Contenido para test/quality/errores-object.test.ts

import { UserService, value, resultadoFinal } from '../../src/quality/errores-object';

// Describimos el grupo de pruebas
describe('Pruebas para errores-object.ts', () => {

  // Prueba 1: Probar la clase UserService
  describe('UserService', () => {
    it('debería crear una instancia de la clase', () => {
      const service = new UserService();
      expect(service).toBeDefined();
    });

    it('debería poder llamar a los métodos', () => {
      const service = new UserService();
      expect(service.getUserData()).toBeUndefined();
      expect(service.sendEmail()).toBeUndefined();
    });
  });

  // Prueba 2: Probar las constantes
  describe('Constantes del archivo', () => {
    it('debería tener los valores correctos', () => {
      expect(value).toBe(10);
      expect(resultadoFinal).toBe(20);
    });
  });

});
// test/quality/insecure-2-object.test.ts (NUEVO)

// Importamos las variables que exportamos del archivo inseguro
import {
  username,
  queryString,
  userInput,
  html,
  dbPassword,
  config,
  logPasswordError, // Importamos la función de log
} from '../../src/quality/insecure-2-object';

describe('Pruebas para insecure-2-object.ts (Vulnerabilidades)', () => {

  it('debería contener una cadena de inyección SQL', () => {
    expect(username).toContain('DROP TABLE Users');
    expect(queryString).toContain("admin'; DROP TABLE Users; --");
  });

  it('debería contener un payload XSS', () => {
    expect(userInput).toContain('<script>alert("XSS");</script>');
    expect(html).toContain(userInput);
  });

  it('debería contener credenciales hardcodeadas', () => {
    expect(dbPassword).toBe('password123');
    expect(config.dbPassword).toBe('password123');
    expect(config.apiKey).toBe('abc123');
  });

  // Prueba para la función que loguea la contraseña
  it('debería registrar una contraseña en la consola', () => {
    // 'Espiamos' a console.log para asegurarnos que fue llamado
    const consoleSpy = jest.spyOn(console, 'log');
    
    // Ejecutamos la función que queremos probar
    logPasswordError();

    // Comprobamos si console.log fue llamado con la contraseña
    expect(consoleSpy).toHaveBeenCalledWith('Error: La contraseña password123 no es válida');

    // Limpiamos el 'espía'
    consoleSpy.mockRestore();
  });

});
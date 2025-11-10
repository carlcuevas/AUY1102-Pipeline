// test/quality/insecure-1-object.test.ts (Corregido)

// Usamos 'require' para supertest y para la app
const request = require('supertest');
const app = require('../../src/quality/insecure-1-object');

describe('Pruebas para insecure-1-object.ts', () => {

  it('debería responder a la petición POST con el username en el HTML', async () => {
    const username = 'TestUser';

    const response = await request(app)
      .post('/')
      .send({ username: username }); // Enviamos el body

    expect(response.status).toBe(200);
    expect(response.text).toContain(`Hello ${username}`);
    expect(response.text).toContain(`value="${username}"`);
  });

  it('debería manejar una petición sin username', async () => {
    const response = await request(app)
      .post('/')
      .send({}); // Enviamos un body vacío

    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello undefined');
  });

});
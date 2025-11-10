// src/quality/insecure-2-object.ts (MODIFICADO)

export const username = "admin'; DROP TABLE Users; --";
export const queryString = `SELECT * FROM Users WHERE username='${username}'`;

// XSS
export const userInput = '<script>alert("XSS");</script>';
export const html = `<div>${userInput}</div>`;

// CSRF
// Comentado porque 'app' no está definido
/*
app.post('/change-password', (req, res) => {
  const newPassword = req.body.newPassword;
  // Cambiar la contraseña sin verificar el token CSRF
});
*/

// Deserialización
// Comentado porque 'req' no está definido
// const data = JSON.parse(req.body);

// Credenciales
export const dbPassword = 'password123';
// const apiSecretKey = 'supersecretkey123'; // No usar en producción
export const config = {
  dbUsername: 'admin',
  dbPassword: 'password123',
  apiKey: 'abc123',
};

// Comentado porque 'hash' no está definido
// const hashedPassword = hash('password123');

// Envolvemos el log en una función para poder probarlo
export function logPasswordError() {
  console.log(`Error: La contraseña ${dbPassword} no es válida`);
}

// Ejecutamos la función para cubrir esa línea
logPasswordError();
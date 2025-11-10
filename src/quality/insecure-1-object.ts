// src/quality/insecure-1-object.ts (Corregido)

// Usamos 'require' como en el archivo original
const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // <-- AÑADE ESTA LÍNEA

app.post('/', (req, res) => {
  const input = req.body.username;
  const template = `
doctype
html
head
    title= 'Hello world'
body
    form(action='/' method='post')
        input#username.form-control(type='text' name='username' value='${input}')
        button.btn.btn-primary(type='submit') Submit
    p Hello ${input}`;
  
  try {
    const fn = pug.compile(template);
    const html = fn();
    res.send(html);
  } catch (error) {
    res.status(500).send("Error compiling template");
  }
});

// Comentamos app.listen para que no se inicie durante las pruebas
/*
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
*/

// Exportamos la app usando module.exports
module.exports = app;
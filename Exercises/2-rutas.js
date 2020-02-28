/**
 * Rutas se espera armar un mensaje 404 para cuando las
 * rutas NO existan.
 * -- 404 es conocido en los códigos porqué significa que
 * -- NO existe en nuestro programa-web
 *
 * Crear los siguientes Tags que contengan la respuesta
 * <body>, <h1> no existe </h1>, <h2> 404 </h2>
 *
 * Para ejecutar su programa desde consola usar
 * `yarn ex:routes`
 *
 */

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Pagina Root Si existe</h1>')
})

// GET method route
app.get('/custom/:userId/:name', function (req, res) {

  const { userId, name } = req.params
  res.send(`Page Id : ${userId} username: ${name}` );
  console.log(`Page Id : ${userId} username: ${name}`)
});

// POST method route
app.post('/custom', function (req, res) {
  res.send('POST request to the homepage');
});

// PUT method route
app.put('/custom', function (req, res) {
  res.send('PUT request to the homepage');
});

// DELETE method route
app.delete('/custom', function (req, res) {
  res.send('DELETE request to the homepage');
});

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.use(function(req, res, next) {
  res.status(404).send('Error Page , 404 not foud');
});

app.listen(9000, () => console.log('Listening on port 9000!'))

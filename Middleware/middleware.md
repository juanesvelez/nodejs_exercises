# Middleware

¿Qué signica?
Una tradución al español podría ser _**funcionalidades trasversales**_ en la aplicación,
lo que quiere decir que son funciones que se llaman cada vez que hay una petición **HTTP**.

Un ejemplo de middleware importante es la funcionalidad de authenticación porqué es transversal
a toda la aplicación en caso de tenerla.

#### Un middleware por defecto con el que viene _Express_ es el servir archivos estaticos.

##### Donde `static` sería la carpeta donde estarían archivos como CSS, imagenes y/o otros js de 3ºs.

```
const express = require('express');
const app = express();

app.use(express.static('statiic'));

// routes here

app.listen(9000, () => console.log('Listening on port 9000!'));
```

Y como ejemplo haremos un Logger-middleware.
Cogerá la petición y la imprimirá.

###### Finalmente estos son middleware externos para Express [Middleware-Externos](https://github.com/senchalabs/connect#middleware)

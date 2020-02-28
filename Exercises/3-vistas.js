/**
 *  El ejercicio constará de 3 cosas.
 *  1º crear otra ruta `user-template` con un template que reciba
 *  nombre como argumento.
 *
 *  2º crear un partial/footer con sus tags html
 *
 * 3º Adicionar el header existente en partials
 * `yarn ex:templates`
 */

const express = require('express')
const app = express()

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.send('<h1>Pagina Root Si existe</h1>')
})


app.get('/user-template', (req, res) => {
    res.render('template', {title: "Lorem Ipsum" ,
    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit, enim viverra at dis vivamus. Risus eget velit iaculis class cum non et, a cursus maecenas rutrum conubia habitasse luctus felis, pellentesque ultrices primis urna torquent quis. Odio a torquent molestie potenti primis tempor ut eleifend, fermentum auctor tortor quis inceptos pretium hendrerit egestas laoreet, nullam accumsan tincidunt dictum nibh mi facilisi.",
    p_footer: "All rights reserved © 2020"  } )
})

app.listen(9000, () => console.log('Listening on port 9000!'))

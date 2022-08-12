import express from 'express';
import path from 'path';
import hbs from 'hbs';

const app = express();
const port = 8080;

// const __dirname = path.resolve();

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( path.resolve() + '/views/partials');

// Servir contenido estatico
app.use( express.static( 'public' ))


app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo desde su respectiva ruta');
})

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Carlos Rodriguez',
        titulo: 'Curso de Node'

    });
});

app.get('/generic', (req, res) => {
    // res.sendFile(path.resolve() + '/public/generic.html');
    res.render('generic', {
        nombre: 'Carlos Rodriguez',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    // res.sendFile(path.resolve() + '/public/elements.html');
    res.render('elements', {
        nombre: 'Carlos Rodriguez',
        titulo: 'Curso de Node'
    });

});

app.get('*', (req, res) => {
    res.sendFile(path.resolve() + '/public/old/404.html');
});

app.listen( port, () => {
    console.log(`App listening on port ${ port }`);
});
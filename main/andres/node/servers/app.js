const express = require('express');

// Express app
const app = express();

// register view engine

app.set('view engine', 'ejs');
// app.set('views', 'nameWHereIplacedThefolder');

// Listen for request
app.listen(3000);

app.get('/', (req, res) => {
    const characters = [
        { name: 'Ice Bear', description: 'The little brother and the one that do everyting' },
        { name: 'Panda', description: 'The middle brother and is very very cute' },
        { name: 'Grizz', description: 'The older brother and the one that likes to get into troubles' }
    ];

    res.render('index', { title: 'Home', characters });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/description/create', (req, res) => {
    res.render('create', { title: 'Create new Character' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
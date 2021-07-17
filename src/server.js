const express = require('express')
const path = require('path')


const app = express()

//MIDDLEWARE

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.sendFile('/html/index.html', { root: './public' });


})

app.get('/sanAndres', (req, res) => {
    res.sendFile('/html/sanAndres.html', { root: './public' });


})

app.get('/sanPedro', (req, res) => {
    res.sendFile('/html/sanPedro.html', { root: './public' });


})

app.get('/laCalera', (req, res) => {
    res.sendFile('/html/calera.html', { root: './public' });


})






app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
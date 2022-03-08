const express = require('express');
const path = require("path");
const http =require('http');
const https =require('https');
const port = process.env.PORT |3000;

// mongoose.connect('mongodb://localhost/ashutoshkart', { useNewUrlParser: true });

const app = express();
app.use('/Css', express.static('Css'));
app.use('/IMG', express.static('IMG'));
app.use('/javascript', express.static('javascript'));
app.use(express.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname, 'Css')));
app.use(express.static(path.join(__dirname, 'IMG')));
app.use(express.static(path.join(__dirname, 'javascript')));

app.get('/', (req, res, next) => {

    res.sendFile(path.join(__dirname, "./Html/Home.html", ))

})
app.get('/about', (req, res, next) => {

    res.sendFile(path.join(__dirname, "./Html/About.html", ))

})
app.get('/Contact', (req, res, next) => {

    res.sendFile(path.join(__dirname, "./Html/Contact.html", ))

})
app.get('/House-Keeping', (req, res, next) => {

    res.sendFile(path.join(__dirname, "./Html/House_keeping.html", ))

})
app.get('/Manpower', (req, res, next) => {

    res.sendFile(path.join(__dirname, "./Html/Manpower_Outsourcing.html", ))

})
app.get('/Security-service', (req, res, next) => {

    res.sendFile(path.join(__dirname, "./Html/Security_Service.html", ))

})
app.get('/Transport', (req, res, next) => {

    res.sendFile(path.join(__dirname, "./Html/Transport.html", ))

})
app.get('*', (req, res) => {
    res.status(404).send("404")
})

app.listen(port,(req, res) => {

    console.log(`servering at ${port}`);
})

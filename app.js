const express = require('express');
const path = require('path')

const app = express();
app.use(express.static('public'));

app.listen(3030, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/shoppingCart', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/shoppingCart.html'))
})

app.post('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

//agrego ruta a productDetail
/*app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});*/
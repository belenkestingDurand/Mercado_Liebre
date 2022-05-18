const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//views 
const views = path.join(__dirname, 'views/')
//public
const public = path.join(__dirname, 'public/')
const home_html = path.join(__dirname, 'views/home.html')
const register_html = path.join(__dirname, 'views/register.html')
const login_html = path.join(__dirname, 'views/login.html')
//html
const htpptRaiz = '/'
const htpptHome = '/home'
const htpptRegister = '/register'
const htpptLogin = '/login'
//html
const homehtml = 'home.html'

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

//Definir los camions
app.listen(port, () => console.log('Example app listening at http://localhost:'+port))

app.get(htpptRaiz, function(req, res){
    res.sendFile(home_html)
})
app.get(htpptHome, function(req, res){
    res.sendFile(home_html)
})
app.get(htpptRegister, function(req, res){
    res.sendFile(register_html)
})
app.get(htpptLogin, function(req, res){
    res.sendFile(login_html)
})
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const {connectDB}=require('./db')
const User = require('./models/users')
connectDB()
const app = express()
//settings
app.set('views',path.join(__dirname, 'views'))
app.set('view engine','ejs')
//routes
app.get('/',(req,res)=>res.render('profile',{name:'buan',age:27}))
//antes: res.send()
//app.get('/api/users',(req,res)=>res.json([{name:'ryan'},{name:'juan'}]))
app.get('/api/users',async (req,res)=>{
  const users = await User.find()  
  res.json(users)
})

app.get('/profile',(req,res)=>res.render('profile',{name:'buan',age:27}))
//static files
app.use(express.static('public'))
//starting server
app.listen(process.env.PORT || 3000)
console.log('sever on port', process.env.PORT || 3000)

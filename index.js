const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

let users1 = [
    {
    id: 0,        
    name: "Davi Silva Sauro",
    phone: "2444-66666"
},
{
    id: 1,
    name: "Maria",
    phone: "2444-66666"
},
{
    id: 2,
    name: "Doly",
    phone: "2444-66666"
}

]

app.set("views", path.join(__dirname, 'views'));
app.set("views engine", "ejs");

app.get("/", (req, res)=>{

    res.render('user.ejs', {users: users1})
})

app.get("/about", (req, res) =>{
    res.render('about.ejs');
})

app.listen(3000, () =>{
    console.log(`server running on port ${port}...`)
})
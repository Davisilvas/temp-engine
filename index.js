const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
// const port = 3000;

app.set("views", path.join(__dirname, 'views'));
app.set("views engine", "ejs");

app.get("/", (req, res)=>{

    res.render('user.ejs')

})

app.listen(3000, () =>{
    console.log(`server running...`)
})
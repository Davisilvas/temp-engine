const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

let user = {
    id: 0,
    name: "Davi 'Wulfric' Santos",
    tel: "(24) 993287911",
}

function render (data, obj){
    for (let key in obj){
        data = data.replace(`{{{${key}}}}`, obj[key])
    }
    return data;
}

app.get("/", (req, res)=>{
    fs.readFile('./templates/user.html', 'UTF8', (err, data) =>{
        if(!err){
            res.send(render(data, user));
        }
    })
})

app.listen(`${port}`, () =>{
    console.log(`server running on ${port}...`)
})
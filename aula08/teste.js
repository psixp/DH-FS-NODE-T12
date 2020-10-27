let series = [ { "id": 1, "name": "Friends" }, 
    { "id": 2, "name": "Breaking Bad" }, 
    { "id": 3, "name": "Dexter" }, 
    { "id": 4, "name": "Six Feet Under" } ]

const express = require('express');
const app = express();

console.log(series)

app.get("/serie/:id", (req, res) =>{
    let id = req.params.id
     if (series.id == id){
        res.send(id)}
})
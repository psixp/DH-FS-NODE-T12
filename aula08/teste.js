let series = [ { "id": 1, "name": "Friends" }, 
    { "id": 2, "name": "Breaking Bad" }, 
    { "id": 3, "name": "Dexter" }, 
    { "id": 4, "name": "Six Feet Under" } ]

const express = require('express');
const app = express();

const listarSeries = (series) => {
    series.forEach((id) => {
      console.log("Nome: " + id.name + "\n" + "id: " + id.id);
    });
    console.log("Temos o total de " + series.length + " serie(s) registrada(s) no sistema");
  }

listarSeries(series)

app.get("/serie/:id", (req, res) =>{
    let id = req.params.id
     if (series.id == id){
        res.send(id)}
})
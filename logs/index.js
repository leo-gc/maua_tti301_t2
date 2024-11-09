require('dotenv').config()
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

let { PORT } = process.env;
let logs = [];
let id = 0;


app.post('/eventos', (req, res) => {
  id++;
  const { type } = req.body;
  const logCreation = {
    id,
    type,
    date: new Date()
  }

  logs.push(logCreation);

  return res.status(201).json(logCreation);
})

app.get('/logs', (req, res) => {
  return res.json(logs);
})

app.listen(PORT, () => {
  console.log(`Logs. Porta ${PORT}.`);
})

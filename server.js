const express = require('express')
const app = express()
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 8000;

// initialize middleware

// function of express, it parses INCOMING JSON payload
app.use(express.json({ extended: false }));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));


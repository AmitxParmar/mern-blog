const express = require('express')
const app = express()
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 8000;

// initialize middleware

// function of express, it parses INCOMING JSON payload
app.use(express.json({ extended: false }));

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect("mongodb://localhost:27017");
        const db = client.db('mernblog');
        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).json({ message: "Error coneecting to database", error })
    }
};

app, get('/api/articles/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db
            .collection('articles')
            .findOne({ name: articleName });
        res.status(200).json(articleInfo);
    }, res);
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));


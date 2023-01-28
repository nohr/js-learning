import express from 'express';
import cors from 'cors';

// Initialize the express app
const app = express();
app.use(cors());   // Enable CORS
app.use(express.json()); // for parsing application/json

// Make some animals
import Chance from 'chance';
const chance = new Chance();

const animals = [...Array(250).keys()].map(id => ({
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
})
);

// Endpoint to search for animals
app.get('', (req, res) => {

    // Filter results by query
    const q = req.query.q?.toLowerCase() || "";
    console.log(req.query);
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q) || animal.name.toLowerCase().includes(q) || animal.age.toString().includes(q));

    res.send(results);


})

// Start the server
app.listen(8080, () => console.log("listening on port 8080 http://localhost:8080"));
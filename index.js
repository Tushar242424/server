const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

let currentTemperature = 0;

app.put('/temperature', (req, res) => {
    const temperature = req.body.temperature;
    console.log(`Received temperature: ${temperature}`);

    // Update the current temperature
    currentTemperature = temperature;

    // Render the HTML page with the updated temperature
    res.render('index', { temperature: currentTemperature });
});

app.get('/', (req, res) => {
    // Render the HTML page with the current temperature
    res.render('index', { temperature: currentTemperature });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

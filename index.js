var express = require('express');
var axios = require('axios'); // Import axios
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Thetips4you" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": "Great!, It works!" }');
});

app.get('/api/users', function (req, res) {
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then(function (response) {
             // Handle success
             res.send(response.data);
         })
         .catch(function (error) {
             // Handle error
             res.status(500).send({ error: "Error fetching data" });
         });
});

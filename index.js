const express = require('express');

const app = express();
const port = 8081;

// Main route of app
app.get('/', (req, res) => {
	// send can only be used 1 time 
	// inside route callback
	res.send("Welcome to my app!");
});

// All routes must start with "/"
app.get('/blog', (req, res) => {
	res.send("Welcome to my blog");
});

// :/ indicates route parameter
// so, the route /hello doesnt exists
// without the parameter, that can be anything
// provided by user on url
app.get('/hello/:name', (req, res) => {
	res.send(`hello ${req.params.name}`);
});

// listen function open the server
// and must be the last command of file
app.listen(port, () => {
	console.log(`Server running on port ${port}!`);
	console.log(`Type "http://localhost:${port}" on your browser`);
});
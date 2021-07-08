const express = require('express');
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

const app = express();
const port = 8081;

// config
// template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// mysql database connection
const sequelize = new Sequelize('test', 'node', '123456', {
	host: 'localhost',
	dialect: 'mysql',
});

// routes
app.get('/cad', (req, res) => {
	res.render('form'); // Render a html file
});

// listen function open the server
// and must be the last command of file
app.listen(port, () => {
	console.log(`Server running on port ${port}!`);
	console.log(`Type "http://localhost:${port}" on your browser`);
});
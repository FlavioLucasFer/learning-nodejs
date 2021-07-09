const express = require('express');
const handlebars = require('express-handlebars');
// BodyParser is deprecated but we can use express itself instead
// const bodyParser = require('body-parser');

const app = express();
const port = 8081;

// models
const Post = require('./models/Post');

// config
// template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Body Parser
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get('/', async (req, res) => {
	try {
		const posts = await Post.findAll({ order: [['id', 'DESC']] });
		res.render('home', { posts: posts });
	} catch (e) {
		res.render('home');
		console.log('error:', e);
	}
});

app.get('/cad', (req, res) => {
	res.render('form'); // Render a html file
});

app.post('/add', async (req, res) => {
	const { title, content } = req.body;

	try {
		await Post.create({
			title,
			content,
		});
		res.redirect('/'); // for redirect to some route as response
	} catch (e) {
		res.send('Failed to create a post!');
	}
});

app.get('/delete/:id', async (req, res) => {
	try {
		await Post.destroy({ where:  { 'id': req.params.id }});
		res.send('Post successfully deleted!');
	} catch (e) {
		res.send(`Failed to delete. Error: ${e}`);
	}
});

// listen function open the server
// and must be the last command of file
app.listen(port, () => {
	console.log(`Server running on port ${port}!`);
	console.log(`Type "http://localhost:${port}" on your browser`);
});
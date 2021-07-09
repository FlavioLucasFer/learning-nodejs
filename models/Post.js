const { Sequelize, sequelize } = require('./db');

const Post = sequelize.define('posts', {
	title: {
		type: Sequelize.STRING,
	},
	content: {
		type: Sequelize.STRING,
	},
});

Post.sync();

module.exports = Post;
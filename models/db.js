const Sequelize = require('sequelize');

// mysql database connection
const sequelize = new Sequelize('postapp', 'node', '123456', {
	host: 'localhost',
	dialect: 'mysql',
});

module.exports = {
	Sequelize,
	sequelize,
};
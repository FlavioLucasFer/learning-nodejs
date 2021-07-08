const Sequelize = require('sequelize');
const sequelize = new Sequelize(/*database_name*/'test', /*user*/'node', /*user_password*/'123456', {
	host: 'localhost', 
	dialect: 'mysql', 
});

// Check connection
sequelize.authenticate()
	.then(() => {
		console.log("Successfully connected!");
	})
	.catch((e) => {
		console.log("Failed to connect: ", e);
	});

module.exports = sequelize;
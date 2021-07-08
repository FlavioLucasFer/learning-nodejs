const Sequelize = require('sequelize');
const sequelize = require('../connection');

const usuario = sequelize.define('usuarios', {
	nome: {
		type: Sequelize.STRING,
	},
	sobrenome: {
		type: Sequelize.STRING,
	},
	idade: {
		type: Sequelize.INTEGER,
	},
	email: {
		type: Sequelize.STRING,
	},
});

usuario.sync({ force: true });

module.exports = usuario;
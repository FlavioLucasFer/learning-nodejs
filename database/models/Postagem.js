const Sequelize = require('sequelize');
const sequelize = require("../connection");

// creates model / table
const Postagem = sequelize.define(/*table_name*/'postagens', /*table_fields*/{
	// STRING type has limited char length
	// TEXT type has unlimited char length
	titulo: {
		type: Sequelize.STRING,
	},
	conteudo: {
		type: Sequelize.TEXT,
	},
	/*
	Sequelize creates 3 control fields automatically
		"id" field of type int as primary key with auto incriment 
		"createdAt" field of type datetime with current timestamp default value
		"updatedAt" field of type datetime with current timestamp default value and current timestamp on update rule 
	*/
});


// Postagem.sync() // This creates the table if it doesn't exist (and does nothing if it already exists)
Postagem.sync({ force: true })
	.then(() => {
		// Insert row on table
		Postagem.create({
			titulo: 'Testing insert',
			conteudo: 'Testing',
		});
	}); // This creates the table, dropping it first if it already existed
// Postagem.sync({ alter: true }) // This checks what is the current state of the table in the database(which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model


module.exports = Postagem;
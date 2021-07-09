const mongoose = require('mongoose');

const databaseName = 'learning';
// # CONNECTING TO MONGODB AND TO DATABASE #

mongoose.Promise = global.Promise; // avoid mistakes
// The connection to mongodb is via url
// first pass mongodb://
// then the host, in this case, localhost
// then the database (if database passed doesn't exists, mongoose will create it)

mongoose.connect(`mongodb://localhost/${databaseName}`, {
	useMongoClient: true,
}).then(() => {
	console.log(`Successfully connected to "${databaseName}" database`);
}).catch(err => {
	console.log(`Failed to connect to "${databaseName}" database: ${err}`);
});

// # CREATING A MODEL

// Naming the model in the singular and having sulfix "Schema" is good practice
const UserSchema = mongoose.Schema({
	name: {
		type: String, // MongoBD uses JS types
		require: true, // By default require is false
	},
	surname: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	age: {
		type: Number,
		require: true,
	},
	country: {
		type: String,
	},
});

// Creating the User model
// If collection doesn't exists, mongoose will create it
mongoose.model(/*Collection name*/'users', UserSchema);

// "Inserting" user
const User = mongoose.model('users');

new User({
	name: 'learning',
	surname: 'mongoose',
	age: 21,
	country: 'Brazil',
	email: 'email@mail.com',
}).save() // needed to save it on collection
	.then(() => {
		console.log('Sucessfully saved user!');
	})
	.catch(err => {
		console.log(`Failed to save the user: ${err}`);
	});
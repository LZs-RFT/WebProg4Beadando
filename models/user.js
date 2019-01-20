var db = require('../modules/db');

var Schema = db.Schema;

var UserSchema = new Schema({
	username: {type: String, require: true, index: {unique: true}},
	password: {type: String, require: true}
},{collections: 'users' });

module.exports = db.model('User',UserSchema);

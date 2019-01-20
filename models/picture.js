var db = require('../modules/db');

var Schemap = db.Schema;

var PictureSchema = new Schemap({
	name: {type: String, require: true, index: {unique: true}},
    width: {type: Number, require: true},
    height: {type: Number, require: true},
    path: {type:String, require:true}
},{collections: 'pictures' });

module.exports = db.model('Picture',PictureSchema);
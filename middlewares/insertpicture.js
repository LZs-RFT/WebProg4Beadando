const Picture = require("../models/picture");
function insertpicture(objectRepository){
    return function(req, res, next){
		picture = {
            name: req.body.name,
            width: req.body.width,
            height: req.body.height,
            path: req.body.path
        }
        newPic=new Picture(picture);
        console.log(newPic);
		newPic.save(
			function(err){
				return next();
		});
		
	};
    
}
module.exports = insertpicture; 
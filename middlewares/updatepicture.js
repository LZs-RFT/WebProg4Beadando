function updatepicture(objectRepository){
    return function(req, res, next){
		picture = {
            _id: req.body._id,
            name: req.body.name,
            width: req.body.width,
            height: req.body.height,
            path: req.body.path
        }
        console.log(picture);
		objectRepository.modelPicture.findByIdAndUpdate(req.body._id,
			picture,{new: true},
			function(err, pic){
				//objectRepository.pic=pic;
				return next();
		});
		
	};
    
}
module.exports = updatepicture; 
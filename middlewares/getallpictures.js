function getallpictures (objectRepository){
	return function(req, res, next){
		objectRepository.modelPicture.find({},'name width height path', function(err, pictures) {
            if(!err){
                objectRepository.err=err;
            }
          
            objectRepository.pictures=pictures;
			return next();
		});
		
	};
}
module.exports = getallpictures;
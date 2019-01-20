function getonepicture (objectRepository){
	return function(req, res, next){
        var id=req.params.idm; //le kell csípni az idm elől a (:)-ot, mert a get valamiért :-al adja át, és a : pont a paraméterelválasztó is egyben -.-
        id=id.substring(1);
		picture = {
			_id: id
        }
		objectRepository.modelPicture.findOne(picture,
			'name width height path',
			function(err, pic){
				if(!pic){
                    console.log('Nincsen ilyen kép!');
					return res.redirect('/project');
				}
				objectRepository.pic=pic;
				return next();
		});
		
	};
}
module.exports = getonepicture; 
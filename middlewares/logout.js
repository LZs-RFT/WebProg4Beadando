function logout (objectRepository){
	return function(req, res, next){
		if('undefinied'!= typeof objectRepository.username){
            delete objectRepository.username;
        }
        return next();
	};
}
module.exports = logout; 
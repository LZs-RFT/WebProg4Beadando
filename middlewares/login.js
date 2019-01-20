function login (objectRepository){
	return function(req, res, next){
		var passwd = req.body.password; //a bejelenkzeő formból kapott jelszó
		var hashedPasswd = objectRepository.sha512.sha512(passwd).toUpperCase();

		//var felhasznalonev = 'asd';//ezt kéne az adatbázisból kinyerni
		//var jelszo = 'E54EE7E285FBB0275279143ABC4C554E5314E7B417ECAC83A5984A964FACBAAD68866A2841C3E83DDF125A2985566261C4014F9F960EC60253AEBCDA9513A9B4'; // 'admin' -> http://passwordsgenerator.net/sha512-hash-generator/
		hashedUser = {
			username: req.body.username,
			password: passwd
		}
		objectRepository.modelUser.findOne(hashedUser,
			'username',
			function(err, user){
				if(!user){
					console.log('Nincsen ilyen felhasználó!');
					return res.redirect('/login');
				}
				objectRepository.username=user.username;
				return next();
		});
		
	};
}
module.exports = login; 
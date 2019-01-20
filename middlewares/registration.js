const User = require("../models/user");
function registration(objectRepository){
    return function(req, res, next){
		user = {
            username: req.body.username,
            password: req.body.password
        }
        if(user.password!=req.body.password2)
        {
            objectRepository.err='A két jelszó nem egyezik meg';
            return res.redirect('/registration');
        }
        else{
            newUser=new User(user);
		    newUser.save(
			    function(err){
				    return next();
		    });
        }
	};
    
}
module.exports = registration; 
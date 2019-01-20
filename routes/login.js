var express = require('express');
var sha512 = require('js-sha512');
var router = express.Router();

var loginMW = require('../middlewares/login');
var logoutMW = require('../middlewares/logout');
var registerMW =require('../middlewares/registration');
var modelUser = require('../models/user');
var objectRepository = {
sha512: sha512, 
modelUser: modelUser
}

router.get('/login', 
    function(req, res){ //ez kéri le a legfelelő viewet a hozzá tartozó funkcióval, ami ebben az esetben névtelen funkció, és csak annyit csinál, hogy lerendeleli a nézetet 
        res.render('pages/login');
    }
);
router.post('/login',
    loginMW(objectRepository),
    function(req,res){
        res.render('pages/home',objectRepository);
    }
);//tehát itt a router.post függvénye kéri hogy melyik triggerből, milyen model melyik függvényét akarjuk használni, és ez a callback függvény kéri a next.et is, tehát azt hová elnavigál
router.get('/logout',logoutMW(objectRepository),
    function(req,res){
    res.render('pages/home',objectRepository);
   });

router.get('/registration',
   function(req,res){
   res.render('pages/registration');
});
router.post('/registuser',
    registerMW(objectRepository),
    function(req,res){
        res.render('pages/login',objectRepository);
    }
);
module.exports = router;
var express = require('express');
var sha512 = require('js-sha512');
var router = express.Router();

var getAllPicturesMW = require('../middlewares/getallpictures');
var deletePictureMW= require('../middlewares/deletepicture');
var getOnePictureMW= require('../middlewares/getonepicture');
var updatePictureMW= require('../middlewares/updatepicture');
var insertPictureMW= require('../middlewares/insertpicture');
var modelPicture = require('../models/picture');

var objectRepository = {
sha512: sha512, 
modelPicture: modelPicture
}


router.get('/project', //milyen url részre triggerelődjön a get
    getAllPicturesMW(objectRepository), //milyen(több is lehet) callback funkciót hívjon meg, ezek kommunikálnak az adatbázissal
    function(req, res){ //névtelen metódus, ami meghatározza, hogy mi történjen a callback funkciók lefutása után
    res.render('pages/project',objectRepository); //itt épp az új viewet rendelei le, és ha meg kell jeleníteni adatot, azt a kövi paraméterbe oddadaja
});

router.get('/project/delete:idm',//az imd az adatbázisban a képhez kapcsolódó azonosító, egyszerű hozzáfűzés a gettel
    deletePictureMW(objectRepository),
    function(req, res)
	{   
        res.render('pages/deletepicture',objectRepository);
		//console.log(req.params.idm);
    });

router.get('/project/update:idm',
    getOnePictureMW(objectRepository),
    function(req, res)
	{   
        res.render('pages/updatepicture',objectRepository);
		//console.log(req.params.idm);
    });  
router.post('/updatepic',
    updatePictureMW(objectRepository),getAllPicturesMW(objectRepository),
    function(req,res){
        
        res.render('pages/project',objectRepository);
    }
);
router.get('/insertpicture',function(req,res){
    res.render('pages/insertpicture');
});
router.post('/insertpic',
    insertPictureMW(objectRepository),getAllPicturesMW(objectRepository),
    function(req,res){
        
        res.render('pages/project',objectRepository);
    }
 );

module.exports = router;
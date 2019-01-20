function deletepictures (objectRepository){
	return function(req, res, next){
        var id=req.params.idm;
        id=id.substring(1);
		picture = {
			_id: id
        }
		objectRepository.modelPicture.remove(
            picture, function(err) {
                if (!err) {
                        console.log('Hiba törlés közben');
                }
                else {
                        console.log('törlés sikeres');
                }
            });
       // console.log(req.params.idm);
        return next();
	};
}
module.exports = deletepictures;
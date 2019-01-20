function ellenorzo (adatok)
{
	return function(req, res, next)
	{
		console.log('itt vagyunk bent!');
		return next();
	}
}

module.exports = ellenorzo;
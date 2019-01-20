function feltolto (adatok)
{
	return function(req, res, next)
	{
		var feltoltes = {
			valtozo: req.params.valtozom,
			szam: 2,
			szoveg: 'szoveg',
			tomb: ['alma','korte','szilva']
		}

		adatok['feltoltes'] = feltoltes;
		console.log('itt vagyunk bent!');
		return next();
	}
}

module.exports = feltolto;
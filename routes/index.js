
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Bingo!' });
};

exports.main = function(req, res){
	req.query.username = "testuser" + Math.ceil(Math.random() * 1000);
	res.render('main', { title: 'Bingo!', username: req.query.username });
}
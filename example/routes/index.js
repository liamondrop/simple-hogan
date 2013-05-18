exports.index = function(req, res){
  var vars = {
    title: 'Express + Hogan',
    message: 'Sitting in a tree...'
  };
  var parts = { part: 'partial.html' };
  res.render('layout.html', { variables: vars, partials: parts });
};

exports.index = function(req, res){
  var vars = {
    title: 'Express test',
    message: 'using Hogan templating system'
  };
  var parts = { part: 'part.smpl' };
  res.render('index.smpl', { variables: vars, partials: parts });
};
var hogan = require("hogan.js"),
    fs = require("fs");

/**
 * Public `read`
 */

exports.read = function (fp, opts, cb) {
  var path = require("path"), name;
  opts.variables = opts.variables || {};
  opts.partials = opts.partials || {};

  for(name in opts.partials) {
    opts.partials[name] = hogan.compile(
      fs.readFileSync(path.join(opts.settings.views, opts.partials[name]), "utf8"))
  }

  fs.readFile(fp, "utf8", function (err, data) {
    err && cb(err);
    cb(null, render(data, opts))
  })
};

/**
 * Private `render`
 */

function render(src, opts) {
  return hogan.compile(src).render(opts.variables, opts.partials)
}

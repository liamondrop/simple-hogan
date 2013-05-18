var hogan = require("hogan.js")
	, fs = require("fs");

/**
 * Expose `read`
 */

exports.read = function (fp, opts, cb) {
  opts.variables = opts.variables || {};
  opts.partials = opts.partials || {};

  for(var i in opts.partials) {
    opts.partials[i] = hogan.compile(
      fs.readFileSync(opts.settings.views + "/" + opts.partials[i], "utf8"))
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
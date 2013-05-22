simple-hogan
============

Simple Express Middleware for Hogan.js


## Getting started

First, create a project directory.
```bash
$ mkdir new-project
```

Next, create a package.json file in your directory. Something like this should work:
```json
{
  "name": "new-project",
  "description": "A new project using express + hogan.js for templating",
  "version": "0.0.1",
  "private": true,
  "dependencies": {
    "simple-hogan": "*"
  }
}
```

Rather than "*", you can run this to get the latest version:
```bash
$ npm info simple-hogan version
```

Finally, ...
```bash
$ npm install
```

This should install `simple-hogan`, `hogan.js` and `express`. The example directory in the simple-hogan module has a small example project to get you started. Typing `npm start` in the project directory should get this running for you.

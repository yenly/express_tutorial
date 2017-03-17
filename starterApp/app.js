var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// where we create our routes
var routes = require('./routes/index');
var users = require('./routes/users');

// app to use express methods
var app = express();

// certain templates (swig, handlebars) require us to declare which template engine to use
// jade and ejs does not require this
// app.engine('html', swig.renderFile);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware - any number of functions invoked by express routing layer before your final request handler is made
// mounting any app.use in between http request and end of response
// order matters

// morgan logs data into console
app.use(logger('dev'));
// retrieve data from front end - let us use request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// gives us access to public folder
app.use(express.static(path.join(__dirname, 'public')));

// definition of our routes
// app.use('/', routes);
app.use('/users', users);

// same code as in index.js
// run middleware all defined in app.use
app.get('/', function(req, res) {
  res.render('index', {title: 'Welcome to express'});
});

app.get('/search', function(req, res) {
    var query = req.query.id;
    res.send('id: ' + query);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

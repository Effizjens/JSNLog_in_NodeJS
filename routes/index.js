var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
//Logging für den Server
var JL = require('jsnlog').JL;
//Logging für die Konsole
var jsnlog_nodejs = require('jsnlog-nodejs').jsnlog_nodejs;
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  //Beispiel Log
  JL().error("Index aufgerufen");
  res.render('index', { title: 'Index' });
});

/* GET home page. */
router.get('/andere_Seite', function(req, res, next) {
  //Beispiel Log
  JL().error("Andere Seite aufgerufen");
  res.render('andere_Seite', { title: 'Andere Seite' });
});

// Ensure that the JSON objects received from the client get parsed correctly.
router.use(bodyParser.json())

// jsnlog.js on the client by default sends log messages to /jsnlog.logger, using POST.
router.post('*.logger', function (req, res) {
    jsnlog_nodejs(JL, req.body);

    // Send empty response. This is ok, because client side jsnlog does not use response from server.
    res.send('');
});
module.exports = router;

'use strict';

var express  = require('express'),
  app        = express(),
  authConfig = require('./config/auth'),
  basicAuth  = require('basic-auth'),
  bodyParser = require('body-parser'),
  watson     = require('watson-developer-cloud');

// configure express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create service wrappers
var conceptInsights = watson.concept_insights(authConfig.getServiceCreds('concept_insights'));
var messageResonance = watson.message_resonance(authConfig.getServiceCreds('message_resonance'));
var personalityInsights = watson.personality_insights(authConfig.getServiceCreds('personality_insights'));
var relationshipExtraction = watson.relationship_extraction(authConfig.getServiceCreds('relationship_extraction'));
var toneAnalyzer = watson.tone_analyzer(authConfig.getServiceCreds('tone_analyzer'));
var visualRecognition = watson.visual_recognition(authConfig.getServiceCreds('visual_recognition'));
var questionAndAnswer = watson.question_and_answer(authConfig.getServiceCreds('question_and_answer'));

// authentication routine
var auth = function(req, res, next) {
  var authUser = basicAuth(req);
  if(!authUser || authUser.name !== authConfig.basicAuth.user
               || authUser.pass !== authConfig.basicAuth.pass) {
    res.setHeader('WWW-Authenticate', 'Basic realm="'+authConfig.realm+'"');
    res.sendStatus(401);
  }
  else {
    next();
  }
};

app.get('/', auth, function(req, res) {
  res.json({"test":"test"});
})

var port = process.env.VCAP_APP_PORT || 3000;
app.listen(port);
console.log('listening at:', port);

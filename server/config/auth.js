var bluemix    = require('./bluemix'),
    extend     = require('util')._extend;

var authConfig = {};

// basic auth for service
authConfig.basicAuth = {
  realm: 'Sherlock-IOT',
  user: 'username',
  pass: 'password'
};

var services = {
  'concept_insights' : {
    version: 'v1',
    username: '',
    password: ''
  },
  'message_resonance' : {
    version: 'v1',
    username: '',
    password: ''
  },
  'personality_insights' : {
    version: 'v2',
    username: '',
    password: '',
  },
  'tone_analyzer' : {
    version: 'v1',
    username: '',
    password: ''
  },
  'relationship_extraction' : {
    version: 'v1',
    username: '',
    password: ''
  },
  'visual_recognition' : {
    version: 'v1',
    username: '',
    password: ''
  },
  'question_and_answer' : {
    version: 'v1',
    username: '',
    password: ''
  }
}; 

authConfig.getServiceCreds = function(service) {
  // if bluemix credentials exists, then override local
  if(services[service]) {
    return extend(services[service], 
                  bluemix.getServiceCreds(services[service]));
  }
  return {};
};

module.exports = authConfig;

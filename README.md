# Sherlock Holmes & Internet of Things

Materials created for the Massive Online/Offline Collaboration of [Sherlock Holmes & the Internet of Things](http://sherlockholmes.io)

## API Usage

### [Hackpad API](https://hackpad.com/Hackpad-API-v1.0-k9bpcEeOo2Q)

Hackpad has an API and [Zapier channel](https://zapier.com/zapbook/hackpad/]. The collaboration is heavily using [sherlock.hackpad.com](https://sherlock.hackpad.com).

### [IBM Watson APIs](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/services-catalog.html)

The Watson APIs focus on cognition. Some might be useful for deduction from clues. Others might be useful for better understanding the influence of writing.

  * [Concept Insights](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/concept-insights.html) - Concept based exploration
  * [Message Resonance](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/message-resonance.html) - Scores impact of words (Cloud & Big Data audience)
  * [Personality Insights](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/personality-insights.html) - Personality analysis from writing 
  * [Tone Analyzer](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/tone-analyzer.html) - Understand perceptions of tone in writing
  * [Relationship Extraction](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/relationship-extraction.html) - Find structure in unstructured text
  * [Visual Recognition](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/visual-recognition.html) Categorizes content of images
  * [Question and Answer](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/visual-recognition.html) Interprets and answers questions (Healthcare & Travel topics)

## Setup

### Server

The server is a Node.js app that can be easily run locally or on IBM BlueMix's Cloud Foundry PaaS as documented [here](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/getting_started/gs-full-nodejs.shtml#prepare). See `server/config/auth.js` and `server/manifest.yaml` for services to create and configure.

## License

TBD

Portions of this work are reproduced from work created and shared by IBM. IBM is not otherwise affiliated with the development of this work.

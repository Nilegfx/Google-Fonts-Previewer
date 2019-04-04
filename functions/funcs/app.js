const functions = require('firebase-functions');
const express = require('express');
const {setupCors} = require('./setups')
const {createRoutes} = require('./routes');

const app = express();
setupCors(app);
createRoutes(app);

exports.app = functions.https.onRequest(app);

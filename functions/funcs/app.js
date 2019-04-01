const functions = require('firebase-functions');
const express = require('express');
const {setupRoutes} = require('./routes');

const app = express();

setupRoutes(app);

exports.app = functions.https.onRequest(app);

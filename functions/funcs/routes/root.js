const functions = require('firebase-functions');
const router = require('express').Router();

const root = (req, res) => {
  res.send('api root');
};

//route setup
router.get('/', root);

exports.router = router;

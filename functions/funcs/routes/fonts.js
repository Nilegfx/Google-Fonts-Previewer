const functions = require('firebase-functions');
const router = require('express').Router();
const Axios = require('axios');

const FONTS_API_KEY = functions.config().googlefontspreview.api_key;

const getGoogleFonts = (req, res) => {
  Axios.get(
    `https://content.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=${FONTS_API_KEY}&fields=items(family)`
  )
    .then(({ data }) => data)
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

//route setup
router.get('/', getGoogleFonts);

exports.router = router;

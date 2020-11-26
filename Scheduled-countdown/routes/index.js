var express = require('express');
var router = express.Router();

const AdminSettings = require('./../services/admin-settings');

// var scheduledTimesJson = require('../public/scheduledTimes.json');


//-------------------------------------------------------------------------
// Initial Page
//-------------------------------------------------------------------------
router.get('/', async function (req, res) {
  res.render('index', {
    title: 'Scheduled-CountDown',
    now: "s"
  });
});
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// Pages on Admin
//-------------------------------------------------------------------------
router.get('/stage', async function (req, res) {
  res.render('stage', {
    title: 'Scheduled-CountDown',
    now: "s"
  });
});
router.get('/foh', async function (req, res) {
  res.render('foh', {
    title: 'Scheduled-CountDown',
    now: "s"
  });
});
router.get('/Countdown', async function (req, res) {
  let adminSettingsData = await AdminSettings.get();
  res.render('Countdown', {
    title: 'Countdown',
    now: "now",
    // scheduledTimesJson : scheduledTimesJson.profiles,
    offsetTime: adminSettingsData.timeSettings.offsetTime
  });
});
router.get('/slideshow', async function (req, res) {
  let adminSettingsData = await AdminSettings.get();
  res.render('slideshow', {
    title: 'Scheduled-CountDown',
    now: "now",
    // scheduledTimesJson : scheduledTimesJson.profiles,
    offsetTime: adminSettingsData.timeSettings.offsetTime
  });
});
//-------------------------------------------------------------------------


module.exports = router;

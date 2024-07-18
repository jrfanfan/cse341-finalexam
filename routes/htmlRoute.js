const routes = require('express').Router();
const {ensureAuth, ensureGuest} = require('../midleware/auth');
const htmlController= require('../controllers/htmlController');

routes.get('/dashboard', ensureAuth, htmlController.dashboardCon);
routes.get('/data.hbs', ensureAuth, htmlController.dataCon);
routes.get('/input.hbs', ensureAuth, htmlController.inputCon);
routes.get('/update.hbs', ensureAuth, htmlController.updateDataById);
routes.get('/delete.hbs', ensureAuth, htmlController.deleteDataById);
module.exports = routes;
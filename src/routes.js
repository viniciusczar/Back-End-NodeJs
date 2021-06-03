const express = require ('express');
const ongController = require ('./controllers/ong_controller')
const routes = express.Router();
const incidentsController = require ('./controllers/incidents_controller');
const profilleController = require ('./controllers/profille_controlle');
const sesssionController = require ('./controllers/session_controller');

routes.post('/session', sesssionController.create);

routes.get('/ongs', ongController.index);

routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);
routes.get('/profile', profilleController.index);

module.exports = routes;
const route = require('express').Router();
const userCtrl = require('../controller/userCtrl');

route.get('/users', userCtrl.getAll);
route.get('/users/:id', userCtrl.getSingle);
route.post('/users', userCtrl.create);
route.put('/users/:id', userCtrl.update);
route.delete('/users/:id', userCtrl.delete);

module.exports = route;
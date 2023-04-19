const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeControler');
const loginController = require('./src/controllers/loginControler');

// Rotas da home
route.get('/', homeController.paginaInicial);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);

module.exports = route;
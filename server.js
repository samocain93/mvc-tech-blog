// Setting up initial require variables

const path = require('path');
const express = require('express');

const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers');

// Starting express app
const app = express();
const PORT = 


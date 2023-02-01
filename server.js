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
const PORT = process.env.PORT || 3001;

// SET UP SESSIONS

const sess = {
    secret: 'Top secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Init express session
app.use(session(sess));


const hbs = express.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({
    force: false
})
.then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
})




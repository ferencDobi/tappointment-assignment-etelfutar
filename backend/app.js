const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const Sequelize = require('sequelize');
const logger = require('log4js').getLogger('app');

require('dotenv').config();

const connection = require('./src/utilities/connection');
const User = require('./src/models/User')(connection, Sequelize);
const MenuItem = require('./src/models/MenuItem')(connection, Sequelize);
const authRouter = require('./src/routes/auth')(User);
const menuRouter = require('./src/routes/menu')(MenuItem);

const port = process.env.PORT || 3001;
const { LOG_LEVEL, SESSION_SECRET } = process.env;

logger.level = LOG_LEVEL;

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(SESSION_SECRET));
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: false }
}));

require('./src/config/passport')(app, User);

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.static('public'));
app.use('/menu', menuRouter);
app.use('/auth', passport.initialize(), authRouter);

app.listen(port, () => {
  logger.info(`Listening on port ${port}...`);
});

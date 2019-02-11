const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const logger = require('log4js').getLogger('app');

require('dotenv').config();

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
  saveUninitialized: false
}));

require('./src/config/passport')(app);

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.static('public'));
app.use('/menu', require('./src/routes/menu'));
app.use('/auth', passport.initialize(), require('./src/routes/auth'));

app.listen(port, () => {
  logger.info(`Listening on port ${port}...`);
});

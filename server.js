const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const env = require('dotenv');
env.config();
const { engine, create, ExpressHandlebars } = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const mongooseLogin = require('./connectdb/mongodb');
const loginRoutes = require('./routes/login');
const authRoutes = require('./routes/authRoutes');
const htmlRoutes = require('./routes/htmlRoute');
const dataRoutes = require('./routes/dataRoutes');
const errorHandle = require('./utilities/error');



const app = express();
mongooseLogin();
require('./passport/passport')(passport);

// Midleware
app.use(cors());
app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'text/xml' }));


// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//handlebars
app.engine('.hbs', engine({defaultLayout: 'main' , extname: '.hbs'}));
app.set('view engine', '.hbs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({ secret: process.env.GOOGLE_CLIENT_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', loginRoutes);
app.use('/', authRoutes);
app.use('/', htmlRoutes);
app.use('/', errorHandle.handleErrors(dataRoutes));

// Start the server
app.listen(process.env.PORT, () => {
    console.log('Server started on port 8080');
  });


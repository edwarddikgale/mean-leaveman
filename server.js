
//BASE SETUP
//-------------

var mongoose    = require('mongoose');

//call the packages we need
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

//const mongoUri = config.mongo.host;
mongoose.connect('mongodb://localhost:27017/nodeApi', {
    useMongoClient: true
});


//configure app to use body parser
//this will let us get the data from a post

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//Routes for our API
//-------------------------------------------------

var router = express.Router();  //get an instance of the express router

var myRouter = require('./app/routes/index.route');

//middleware to use for all of our routes
router.use(function(req, res, next){
    console.log('Request Body:: ' + req.body);
    console.log('Something bout to go down! hmm!');
    next(); //make sure we continue to next routes and not terminate here....
});

//test route to make sure everything works ok
router.get('/', function(req, res){
    res.json({message : 'Welcome to my Swedish Node Api you freak!'});
});


//more routes later here...

//Now REGISTER our routes
//Note: All api routes to be prefixed with /api

//app.use('/api', router);
app.use('/api', myRouter);

//START the server
//-------------------------------------------------
app.listen(port);
console.log('Miracles happen on ' + process.env.urlencoded + ' port' + port);


var express     = require('express');
var clientRoutes = require('./client.route');
//import authRoutes from './auth.route';
//import postRoutes from './post.route';

var router = express.Router(); // eslint-disable-line new-cap

//middleware to use for all of our routes
router.use(function(req, res, next){
  console.log('Index router says somen\' bout to go down! hmm!');
  next(); //make sure we continue to next routes and not terminate here....
});

//test route to make sure everything works ok
router.get('/', function(req, res){
  res.json({message : 'Nordic Node Api by Eddie Dikgale'});
});

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

var Client      = require('../models/client.model');

/*
// Routes that end in :: /clients
router.route('/clients')
    //create a client
    .post(function(req, res){
        var client = new Client(); //create a new instance of the client model
        client.name = req.body.name; //set the client name from request

        //save the client and check for errors
        client.save(function(err){
            if(err)
                res.send(err);
            
            res.json({message: 'Client created'});
        });
    })
    //get all the clients localhost/api/clients
    .get(function(req, res){
        Client.find(function(err, clients){
            if(err)
                res.send(err);
            
                res.json(clients);
        });
    })
    ;
*/

// mount user routes at /users
router.use('/clients', clientRoutes);

// mount auth routes at /auth
//router.use('/auth', authRoutes);

//router.use('/posts', postRoutes);

module.exports = router;
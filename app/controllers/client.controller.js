var Client = require('../models/client.model');

/*
    Load user and append to request
*/
function load(req, res, next, id){
    Client.get(id)
        .then((client) => {
            req.user = user;
            return next();
        })
        .catch(e => next(e));
}

/*
    Get client
    returns {Client}
*/
function get(req,res){
    return res.json(req.user);
}

/*
@Property {string} req.body.name => client name
*/
function create(req, res, next){

    const client = new Client({
        name: req.body.name //set the client name from request
    });

    client.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
    
}

/*
Get user list
@Property {number} req.query.skip => number of clients to be skipped
@Property {number} req.query.limit => limit number of clients to be returned
@returns {Client[]}
*/
exports.list = function list(req, res, next){
    const {limit = 50, skip = 0} = req.query;
    Client.clientCollection.list({limit, skip})
        .then(clients => res.json(clients))
        .catch(e => next(e));
}

exports.get = function(req, res){
    Client.clientCollection.find(function(err, clients){
        if(err)
            res.send(err);
        
            res.json(clients);
    });
}

exports.post = function(req, res){
    var client = new Client.clientCollection(); //create a new instance of the client model
    //var data = JSON.parse(req.body);
    client.name = req.body.name; //set the client name from request

    //save the client and check for errors
    client.save(function(err){
        if(err)
            res.send(err);
        
        res.json({message: 'Client created'});
    });
};

exports.update = function(req, res){
    //var client = new Client();

    Client.clientCollection.findById(req.body.id, (err, model) => {

        if(err)
            res.send(err);
        else{
            model.name = req.body.name;
            
            model.save(function(err){
                if(err)
                    res.send(err);
                
                res.json({message: 'Client updated'});
            });            
        }    

    });
}


/*
module.exports = function(){
    list = list
};
*/
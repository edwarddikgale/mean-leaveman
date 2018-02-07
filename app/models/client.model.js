//import Promise from 'bluebird';
//import httpStatus from 'http-status';
//import APIError from '../helpers/APIError';

var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var clientSchema    = new Schema({
    name: String
});

/*
MEthods
*/

clientSchema.method({

});

/*
* Statics
*/

module.exports = {
    clientCollection: mongoose.model('Client', clientSchema)
} 
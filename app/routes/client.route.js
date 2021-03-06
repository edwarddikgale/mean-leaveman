var express = require('express');
//var validate = require('express-validation');
//var paramValidation = require('../config/param-validation');
var clientCtrl = require('../controllers/client.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/clients - Get list of clients */
  .get(clientCtrl.get);

router.route('/list')  
  .get(clientCtrl.list);

router.route('/')
  .post(clientCtrl.post);

router.route('/')
  .put(clientCtrl.update);  

  /** POST /api/clients - Create new client */
  //.post(validate(paramValidation.createClient), clientCtrl.create);

//router.route('/:clientId')
  /** GET /api/clients/:clientId - Get client */
  //.get(clientCtrl.get)

  /** PUT /api/clients/:clientId - Update client */
  //.put(validate(paramValidation.updateClient), clientCtrl.update)

  /** DELETE /api/clients/:clientId - Delete client */
  //.delete(clientCtrl.remove);

/** Load client when API with clientId route parameter is hit */
//router.param('clientId', clientCtrl.load);

module.exports = router;
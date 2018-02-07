var Joi = require('joi');

export default {
  // POST /api/clients
  createClient: {
    body: {
      name: Joi.string().required(),
      /*mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()*/
    }
  },
  // POST /api/posts
  createPost: {
    body: {
      title: Joi.string().required(),
    }
  },

  // UPDATE /api/clients/:ClientId
  updateClient: {
    body: {
      Clientname: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      ClientId: Joi.string().hex().required()
    }
  },

  // UPDATE /api/posts/:postId
  updatePost: {
    body: {
      title: Joi.string().required(),
    },
    params: {
      postId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      Clientname: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};


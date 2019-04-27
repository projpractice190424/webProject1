const express = require('express');
// const router = express.Router();
const router = require('express-promise-router')();

const UsersController = require('../controllers/users');

const { validateBody, validateParam, schemas } = require('../helpers/routeHelper');

// Short form
router.route('/')
    .get(UsersController.index)
    .post(validateBody(schemas.userSchema), UsersController.newUser);

// /users/:id
router.route('/:userId')
    .get(validateParam(schemas.idSchema, 'userId'), UsersController.fetchUserWithId)
    .put([validateParam(schemas.idSchema, 'userId'),
         validateBody(schemas.userSchema)],
            UsersController.replaceUserWithId)
    .patch([validateParam(schemas.idSchema, 'userId'),
                validateBody(schemas.userOptionalSchema)],
            UsersController.updateUserWithId)
    // .delete()
    
router.route('/:userId/cars')
    .get(validateParam(schemas.idSchema, 'userId'), UsersController.fetchUserCars)
    .post([validateParam(schemas.idSchema, 'userId'),
            validateBody(schemas.userCarSchema)],
          UsersController.getNewCar)

module.exports = router;




const router = require('express-promise-router')();

const CarsController = require('../controllers/cars');
const {
    validateParam,
    validateBody,
    schemas
} = require('../helpers/routeHelper');

router.route('/')
    .get(CarsController.index)
    .post(validateBody(schemas.carSchema), CarsController.newCar);

router.route('/:carId')
    .get(validateParam(schemas.idSchema, 'carId'), CarsController.fetchCarWithId)
    .put([validateParam(schemas.idSchema, 'carId'), 
            validateBody(schemas.putCarSchema)],
         CarsController.replaceCar)
    .patch([validateParam(schemas.idSchema, 'carId'),
             validateBody(schemas.patchCarSchema)],
            CarsController.updateCar)
    .delete(validateParam(schemas.idSchema, 'carId'), CarsController.deleteCar);

module.exports = router
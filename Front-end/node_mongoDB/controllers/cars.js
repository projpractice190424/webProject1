
const Car = require('../models/car');
const User = require('../models/user');

module.exports = {
    index: async (req, res, next) => {
        // Get all cars
        const cars = await Car.find({});
        res.status(200).json(cars);
    },

    newCar: async (req, res, next) => {
        const seller = await User.findById(req.value.body.seller);

        const newCar = req.value.body;
        delete newCar.seller;

        const car = new Car(newCar);
        car.seller = seller;

        await car.save();

        seller.cars.push(car);
        await seller.save();

        res.status(200).json(car);
    },
     
    fetchCarWithId: async (req, res, next) => {
        const car = await Car.findById(req.value.params.carId);
        res.status(200).json(car);
    },

    replaceCar: async (req, res, next) => {
        const { carId } = req.value.params;
        const newCar = req.value.body;

        const result = await Car.findByIdAndUpdate(carId, newCar);
        res.status(200).json({ success: true })
    },

    updateCar: async (req, res, next) => {
        const { carId } = req.value.params;
        const newCar = req.value.body;

        const result = await Car.findByIdAndUpdate(carId, newCar);
        res.status(200).json({ success: true })
    },

    deleteCar: async (req, res, next) => {
        const { carId } = req.value.params;
        const car = await Car.findById(carId)

        // If a car is already deleted or does not exist
        if(!car) return res.status(404).json({ error: "Car does\'t exit"});

        // find a user(seller)
        const sellerId = car.seller;
        const seller = await User.findById(sellerId);

        // Remove the car
        await car.remove();

        // remove a car from user
        seller.cars.pull(car);
        await seller.save();

        res.status(200).json({ success: true })
    }
}
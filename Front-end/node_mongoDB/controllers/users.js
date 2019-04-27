const User = require('../models/user');
const Car = require('../models/car')




module.exports = {
    // MARK - Callbacks
    // index: (req, res, next) => {
    //     // Callback function
    //     User.find({}, (err, users) => {
    //         if(err) next(err); 
    //         res.status(200).json(users);
    //     })

    //     res.status(200).json({
    //         message: 'You requested index page'
    //     })
    // },
    
    //MARK - Promises
    // index: (req, res, next) => {
    //     User.find({})
    //         .then(users => {                
    //             res.status(200).json(users);
    //         })
    //         .catch(err => {
    //             next(err);
    //         })
    // },


    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    // Validation: DONE
    newUser: (req, res, next) => {
        const newUser = new User(req.value.body); 
        newUser.save((err, user) => {
            if(err) next(err);
            res.status(201).json(user);
        });
    },

    // Validation: DONE
    fetchUserWithId: async (req, res, next) => {
        const { userId } = req.value.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    },

    // Validation: DONE
    // override an entire object
    replaceUserWithId: async (req, res, next) => {
        const { userId } = req.value.params;
        const newUser = req.value.body;
        const result = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json(result);
    },

    // Validation: DONE
    // able to select fields to be updated
    updateUserWithId : async (req, res, next) => {
        const { userId } = req.value.params;
        const newUser = req.value.body;
        const result = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json(result);
    },

    // Validation: DONE
    fetchUserCars: async (req, res, next) => {
        const { userId } = req.value.params;
        const user = await User.findById(userId).populate('cars');
        res.status(200).json(user.cars);
    },

    // Validation: DONE
    getNewCar: async (req, res, next) => {
        const { userId } = req.value.params;
        const newCar = new Car(req.value.body);
        const user = await User.findById(userId);
        newCar.seller = user;
        await newCar.save();
        user.cars.push(newCar);
        await user.save();
        res.status(200).json(newCar);
    }
};

/*

We can interact with mongoose in 3 different ways
1) Callbacks
2) Promises
3) async/await (Promises)

*/
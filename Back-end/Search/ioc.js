const { createContainer, asCalss, asFunction, injectionMode } = require('awilix');
const searchController = require('./controllers/searchController');
const searchDataManager = require('./classes/searchDataManager/searchDataManager');
const searchDataAdapter = require('./classes/searchDataAdapter/searchDataAdapter');
const locationManager = require('./classes/LocationManager/locationManager');
const clickDataManager = require('./classes/clickDataManager/clickDataManager');
const clickController = require('./controllers/clickController');


const container = createContainer({injectionMode: injectionMode.CLASSIC});

container.register({
    searchDataAdapter: asClass(searchDataAdapter),
    locationManager: asClass(locationManager),
    searchDataManager: asClass(searchDataManager),
    searchController: asClass(searchController),
    clickDataManager: asClass(clickDataManager),
    clickController: asClass(clickController)
});

global.container = container;
const { createContainer, asCalss, asFunction, injectionMode } = require('awilix');
const searchController = require('./controllers/searchController');
const searchDataManager = require('./classes/searchDataManager/searchDataManager');
const searchDataAdapter = require('./classes/searchDataAdapter/searchDataAdapter');

const container = createContainer({injectionMode: injectionMode.CLASSIC});

container.register({
    searchDataAdapter: asClass(searchDataAdapter),
    searchDataManager: asClass(searchDataManager),
    searchController: asClass(searchController)
});

global.container = container;
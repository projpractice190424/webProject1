const httpExceptionHandler = require('../classes/httpResponseException/httpResponseException');
const LocationManager = require('../classes/LocationManager/locationManager');

class SearchController {
    constructor(searchDataManager) {
        this.searchDataManager = searchDataManager;
    }

    searchByRequest(search) {
        var result;
        var locationManager = new LocationManager(search.location);

        try { 
            result = this.searchDataManager.searchByWord(search, locationManager);
        } catch(err) {
            throw new httpExceptionHandler(400, err);
        }

        return result;
    }

    createSearchItem(searchItem) {
        var result;

        try {
             result = this.searchDataManager.createSearchItem(searchItem);
        } catch(err) {
            throw new httpExceptionHandler(400, err);
        }

        return result;
    }
}

module.exports = SearchController;


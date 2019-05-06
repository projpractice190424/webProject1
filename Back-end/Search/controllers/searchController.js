const httpExceptionHandler = require('../classes/httpResponseException/httpResponseException');

class SearchController {
    constructor(searchDataManager) {
        this.searchDataManager = searchDataManager;
    }

    searchByRequest(search) {
        var result;

        try {
            result = this.searchDataManager.searchByWord(search);
        } catch(err) {
            throw new httpExceptionHandler(400, err);
        }

        return result;
    }

}


module.exports = SearchController;


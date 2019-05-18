const httpExceptionHandler = require('../classes/httpResponseException/httpResponseException');

class ClickController {
    constructor(clickDataManager) {
        this.clickDataManager = clickDataManager;
    }

    updateClick(search) {
        var result;

        try {
            result = this.clickDataManager.increaseClick(search);
        }catch(err)  {
            throw new httpExceptionHandler(400, err);
        }
        return result;
    }
}

module.exports = ClickController;
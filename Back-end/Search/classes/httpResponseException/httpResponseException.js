class HttpResponseException {
    constructor(stateCode, details) {
        this.stateCode = stateCode;
        this.details = details;
    }
}

module.exports = HttpResponseException;
const httpExceptionHandler = require('../httpResponseException/httpResponseException');

class LocationManager {
    constructor(location) {
        this.currentLocation = location;
    }

    switchLocation() {
        //TODO: user manually switch location sort info
    }

     /**
     * With given geocordinates, Calculate a distance between the current location
     * @param {string} targetLocation - Target geocordinates.
     */
    getDistanceBetweenTwoPoints(targetLocation) {
        if(this.currentLocation) {
            var longitudeGap = (currentLocation.longitude - targetLocation.logitude) * Math.PI/180.0;
            var latitudeGap = (currentLocation.latitude - targetLocation.latitude) * Math.PI/180.0;
    
            var haversine = Math.pow(Math.sin(latitudeGap/2.0), 2) + Math.cos(currentLocation.latitude*Math.PI/180.0) * Math.cos(targetLocation.latitude*Math.PI/180.0) * Math.pow(Math.sin(longitudeGap/2.0), 2);
            var formulated = 2 * Math.atan2(Math.sqrt(haversine), Math.sprt(1-haversine));
            
            return formulated * 6367; // 6367 radius of the earth.
        } else {
            throw new httpExceptionHandler(400, "Current location has not set up yet");
        }
    }
}

module.exports = LocationManager;

class SearchDataManager {
    constructor(searchDataAdapter, locationManager){ 
        this.searchDataAdapter = searchDataAdapter;
        this.locationManager = locationManager;
    }

    searchByWord(search) {
        var result;

        try {
            // TODO: search by locationManager handle filter.
            result = this.searchDataAdapter.search(search.word, search.pageNum);
        } catch(err) {
            throw new Error(400, err);
        }

        return result;
    }
}

module.exports = SearchDataManager;
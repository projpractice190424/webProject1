
class SearchDataManager {
    constructor(searchDataAdapter){ 
        this.searchDataAdapter = searchDataAdapter;
    }

    searchByWord(search, locationManager) {
        var result;

        try {
            // TODO: search by locationManager handle filter.
            result = this.searchDataAdapter.search(search.word, search.pageNum);
        } catch(err) {
            throw new Error(400, err);
        }

        return result;
    }

    createSearchItem(searchItem) {
        var result; 

        try {
            result = this.searchDataAdapter.createSearchItem(searchItem);
        } catch(err) {
            throw new Error(err);
        }

        return result;
    }
}

module.exports = SearchDataManager;
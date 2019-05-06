
class SearchDataManager {
    constructor(searchDataAdapter){ 
        this.searchDataAdapter = searchDataAdapter;
    }

    searchByWord(search) {
        var result;

        try {
            result = this.searchDataAdapter.search(search.word, search.pageNum);
        } catch(err) {
            throw new Error(400, err);
        }

        return result;
    }
}

module.exports = SearchDataManager;
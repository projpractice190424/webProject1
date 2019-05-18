
class ClickDataManager {
    constructor(searchDataAdapter){ 
        this.searchDataAdapter = searchDataAdapter;
    }
    
    increaseClick(search) {
        var result;

        try {   
            result = this.searchDataAdapter.updateSearchItem(search, {click: search.click+1});
        }catch(err) {
            throw new Error(err);
        }

        return result;
    }
}

module.exports = ClickDataManager;
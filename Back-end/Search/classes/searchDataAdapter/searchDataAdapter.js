
class SearchDataAdapter {
    constructor() {

    }

    /**
     * Given the word and pageNum of the target data, search and return a list of 20 items in the page
     * @param {string} word - word to be searched 
    * @param {int} pageNum - a page number to a result of the search by the word
     * @returns {Object} - a list of 20 searchItems found in db
     * @throws Exception when there is an issue in connection of the firebase
     */
    getSearch(word, pageNum) {
        // TODO: search through DB and return 20 items in top
    }

    /**
     * Given the search object of target data, create a new searchItem 
     * @param {Object} search - an instance of SearchItem model
     * @returns {Object} - an instance of SearchItem model
     * @throws Exception when there is an issue in connection of the firebase
     */
    createSearchItem(search) {

    }

    /**
     * Given the id and change of the target data, update the record that has this id with the change
     * @param {string} id - ID of the record to retrieve
     * @param {Object} change - change of the record to update
     * @returns {Object} - The record matching the ID or null if nothing is found
     * @throws Exception when there is an issue in connection of the firebase
     */
    updateSearchItem(id, change) {
        
    }

    /**
     * Given the id of the target data, delete the record that has this id
     * @param {string} id - ID of the record to retrieve
     * @returns {Object} - The record matching the ID or null if nothing is found
     * @throws Exception when there is an issue in connection of the firebase
     */
    deleteSearchItem(id) {

    }
}
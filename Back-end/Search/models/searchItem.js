const APP_ENUMS = require('../utilities/Enums/enums');
const _ = require('lodash');

class SearchItem {
    constrcutor(id, name, postDate, type, click, userId, pageNum) {
        this.id = id;
        this.name = name;
        this.postDate = new Date(postDate);
        this.type = _.filter(APP_ENUMS.type, e => e === type);
        this.click = click;
        this.userId = userId;
        this.pageNum = pageNum;
    }
}

module.exports = SearchItem;

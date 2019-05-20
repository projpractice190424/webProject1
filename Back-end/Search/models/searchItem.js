const APP_ENUMS = require('../utilities/Enums/enums');
const _ = require('lodash');

class SearchItem {
    constrcutor(id, name, postDate, expiredDate,type, click, userId, pageNum, location, tags) {
        this.id = id;
        this.name = name;
        this.postDate = new Date(postDate);
        this.expiredDate = new Date(expiredDate);
        this.type = _.filter(APP_ENUMS.type, e => e === type);
        this.click = click;
        this.userId = userId;
        this.pageNum = pageNum;
        this.location = location;
        this.tags = tags;
    }
}

module.exports = SearchItem;

const express = require('express');
const router = express.Router();
const httpExceptionHandler = require('../classes/httpResponseException/httpResponseException');

router.post('/api/v1/search/searchByWord', (req, res, next) => {
    var searchController = req.container.resolve('searchController');

    try { 
        res.send(searchController.searchByRequest(req.body.search));
    } catch(err) {
        throw new httpExceptionHandler(400, err);
    }
});

router.post('/api/v1/search/createNewSearchItem', (req, res, next) => {
    var searchController = req.container.resolve('searchController');

    try {
        searchController.createSearchItem(req.body.search);
    } catch(err) {
        throw new httpExceptionHandler(400, err);
    }
});

// router.post('/api/v1/search/deleteSearchItem', (req, res, next) => {
//     var searchController = req.container.resolve('searchController');

//     try {
//         // TODO: Delete by word.
//         res.send(searchController.searchBy(req.body.search));
//     } catch(err) {
//         throw new httpExceptionHandler(400, err);
//     }
// });

module.exports = router;
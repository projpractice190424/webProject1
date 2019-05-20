const express = require('express');
const router = express.Router();
const httpExceptionHandler = require('../classes/httpResponseException/httpResponseException');

router.post('/api/v1/click/updateClick', (req, res, next) => {
    var clickController = req.container.resolve('clickController');

    try {
        res.send(clickController.updateClick(req.body.search));
    } catch(err) {
        throw new httpExceptionHandler(400, err);
    }
});

module.exports = router;
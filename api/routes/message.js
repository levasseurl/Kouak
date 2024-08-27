var express = require('express');
var router = express.Router();

// getMessages
router.get('/', function (req, res, next) {
    res.status(200).send("getMessages");
});

// getMessage
router.get('/:id', function (req, res, next) {
    res.status(200).send("getMessage");
});

// addMessage
router.post('/', function (req, res, next) {
    res.status(200).send("addMessage");
});

// editMessage
router.put('/:id', function (req, res, next) {
    res.status(200).send("editMessage");
});

// deleteMessage
router.delete('/:id', function (req, res, next) {
    res.status(200).send("deleteMessage");
});

module.exports = router;
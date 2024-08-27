const express = require('express');
const router = express.Router();

const { getMessages, getMessage, addMessage, editMessage, deleteMessage, loginMessage } = require('../controllers/message');

// getMessages
router.get('/', async function (req, res, next) {
    const result = await getMessages();
    res.status(result.status).send(result.message);
});

// getMessage
router.get('/:id', async function (req, res, next) {
    const id = req.params.id;
    const result = await getMessage(id);
    res.status(result.status).send(result.message);
});

// addMessage
router.post('/', async function (req, res, next) {
    const content = req.body.content;
    const userId = req.body.userId;
    const result = await addMessage(content, userId);
    res.status(result.status).send(result.message);
});

// editMessage
router.put('/:id', async function (req, res, next) {
    const id = req.params.id;
    const content = req.body.content;
    const result = await editMessage(id, content);
    res.status(result.status).send(result.message);
});

// deleteMessage
router.delete('/:id', async function (req, res, next) {
    const id = req.params.id;
    const result = await deleteMessage(id);
    res.status(result.status).send(result.message);
});

module.exports = router;
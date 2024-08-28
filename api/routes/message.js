const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authToken');

const { getMessages, getMessage, addMessage, editMessage, deleteMessage } = require('../controllers/message');

// getMessages
router.get('/', authenticateToken, async function (req, res, next) {
    const result = await getMessages();
    res.status(result.status).send(result.message);
});

// getMessage
router.get('/:id', authenticateToken, async function (req, res, next) {
    const id = req.params.id;
    const result = await getMessage(id);
    res.status(result.status).send(result.message);
});

// addMessage
router.post('/', authenticateToken, async function (req, res, next) {
    const content = req.body.content;
    const userId = req.body.userId;
    const result = await addMessage(content, userId);
    res.status(result.status).send(result.message);
});

// editMessage
router.put('/:id', authenticateToken, async function (req, res, next) {
    const id = req.params.id;
    const content = req.body.content;
    const result = await editMessage(id, content);
    res.status(result.status).send(result.message);
});

// deleteMessage
router.delete('/:id', authenticateToken, async function (req, res, next) {
    const id = req.params.id;
    const result = await deleteMessage(id);
    res.status(result.status).send(result.message);
});

module.exports = router;
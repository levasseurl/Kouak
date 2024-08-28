const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authToken');

const { getUsers, getUser, addUser, editUser, deleteUser, loginUser } = require('../controllers/user');

// getUsers
router.get('/', authenticateToken, async function (req, res, next) {
    const result = await getUsers();
    res.status(result.status).send(result.message);
});

// getUser
router.get('/:id', authenticateToken, async function (req, res, next) {
    const id = req.params.id;
    const result = await getUser(id);
    res.status(result.status).send(result.message);
});

// addUser
router.post('/', async function (req, res, next) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const result = await addUser(name, email, password);
    res.status(result.status).send(result.message);
});

// editUser
router.put('/:id', authenticateToken, async function (req, res, next) {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const result = await editUser(id, name, email, password);
    res.status(result.status).send(result.message);
});

// deleteUser
router.delete('/:id', authenticateToken, async function (req, res, next) {
    const id = req.params.id;
    const result = await deleteUser(id);
    res.status(result.status).send(result.message);
});

// loginUser
router.post('/login', async function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const result = await loginUser(email, password);
    res.status(result.status).send(result.message);
});

module.exports = router;
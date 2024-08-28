const { User } = require('../models');
// const bcrypt = require("bcrypt");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

const getUsers = async () => {

    try {
        // Get users
        const users = await User.findAll();

        // Check if data recovered
        if (users === null) throw { name: "DataNotAvailableError" };

        // Success
        return { status: 200, message: users };

    } catch (err) {
        const errorResponses = {
            DataNotAvailableError: { status: 404, message: "Error: Data not available" }
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

const getUser = async (id) => {

    try {
        // Get user by id
        const user = await User.findByPk(id);

        // Check if data recovered
        if (user === null) throw { name: "UserNotFoundError" };

        // Success
        return { status: 200, message: user };

    } catch (err) {
        const errorResponses = {
            UserNotFoundError: { status: 404, message: "Error : User not found" }
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

const addUser = async (name, email, rawPassword) => {

    try {
        // Encrypt password
        const password = await bcrypt.hash(rawPassword, 10);

        // Create user
        const user = await User.create(
            {
                name,
                email,
                password
            }
        );

        // Insert user
        const result = await user.save();

        // Success
        return { status: 201, message: result };

    } catch (err) {
        const errorResponses = {
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

const editUser = async (id, name, email, password) => {

    try {
        // Edit user by id
        const result = await User.update(
            {
                name,
                email,
                password
            },
            {
                where: {
                    id: id
                }
            },
        );

        // Check if user edited
        if (result[0] !== 1) throw { name: "UserNotFoundError" };

        // Success
        return { status: 200, message: "User edited" };

    } catch (err) {
        const errorResponses = {
            UserNotFoundError: { status: 404, message: "Error : User not found" }
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

const deleteUser = async (id) => {

    try {
        // Delete user by id
        const result = await User.destroy({
            where: {
                id: id,
            },
        });

        // Check if user deleted
        if (result !== 1) throw { name: "UserNotFoundError" };

        // Success
        return { status: 200, message: "User deleted" };

    } catch (err) {
        const errorResponses = {
            UserNotFoundError: { status: 404, message: "Error : User not found" },
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

const loginUser = async (email, password) => {

    try {
        // Get user by email
        const user = await User.findOne({
            where: {
                email: email,
            },
            raw: true
        });

        // Check if data recovered
        if (user === null) throw { name: "UserNotFoundError" };

        // Compare password hash
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        // Check if password correct
        if (!isPasswordValid) throw { name: "InvalidPasswordError" };

        // Generate access token
        let token = jwt.sign(
            { user_id: user.id },
            process.env.SECRET_KEY,
            { expiresIn: "12h" }
        );

        // Success
        return { status: 200, message: token };

    } catch (err) {
        const errorResponses = {
            UserNotFoundError: { status: 404, message: "Error : User not found" },
            InvalidPasswordError: { status: 400, message: "Error : Invalid password" },
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

module.exports = { getUsers, getUser, addUser, editUser, deleteUser, loginUser };
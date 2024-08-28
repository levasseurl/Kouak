const { Message } = require('../models')

const getMessages = async () => {

    try {
        // Get messages
        const messages = await Message.findAll();

        // Check if data recovered
        if (messages === null) throw { name: "DataNotAvailableError" };

        // Success
        return { status: 200, message: messages };

    } catch (err) {
        const errorResponses = {
            DataNotAvailableError: { status: 404, message: "Error: Data not available" }
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

const getMessage = async (id) => {

    try {
        // Get message by id
        const message = await Message.findByPk(id);

        // Check if data recovered
        if (message === null) throw { name: "MessageNotFoundError" };

        // Success
        return { status: 200, message: message };

    } catch (err) {
        const errorResponses = {
            MessageNotFoundError: { status: 404, message: "Error : Message not found" }
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

const addMessage = async (content, userId) => {

    const publishDate = new Date();

    try {
        // Create message
        const message = await Message.create(
            { 
                content,
                userId,
                publishDate
            }
        );

        // Insert message
        const result = await message.save();

        // Success
        return { status: 201, message: result };

    } catch (err) {
        const errorResponses = {
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

const editMessage = async (id, content) => {

    try {
        // Edit message by id
        const result = await Message.update(
            {
                content
            },
            {
                where: {
                    id: id
                }
            },
        );

        // Check if message edited
        if (result[0] !== 1) throw { name: "MessageNotFoundError" };

        // Success
        return { status: 200, message: "Message edited" };

    } catch (err) {
        const errorResponses = {
            MessageNotFoundError: { status: 404, message: "Error : Message not found" }
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

const deleteMessage = async (id) => {

    try {
        // Delete message by id
        const result = await Message.destroy({
            where: {
                id: id,
            },
        });

        // Check if message deleted
        if (result !== 1) throw { name: "MessageNotFoundError" };

        // Success
        return { status: 200, message: "Message deleted" };

    } catch (err) {
        const errorResponses = {
            MessageNotFoundError: { status: 404, message: "Error : Message not found" },
        };

        const defaultResponse = { status: 500, message: err.message };

        return errorResponses[err.name] || defaultResponse;

    }
}

module.exports = { getMessages, getMessage, addMessage, editMessage, deleteMessage };
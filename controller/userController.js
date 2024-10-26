const express = require('express')

const User = require('../models/user')

const getAllUser = async (req, res) => {

    try {
        const userData = await User.find()
        console.log('User Data get Successfully')
        res.status(200).json(userData)

    } catch (err) {
        console.log(err)
        res.status(500).json(({ error: 'internal server error' }))
    }
}

const createUser = async (req, res) => {
    try {
        const userData = req.body

        const newUser = new User(userData)

        const response = await newUser.save()
        console.log('NEw User Data Saved')
        res.status(200).json(response)
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ error: 'Email already exists' });
        }
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateUser = async (req, res) => {
    try {
        const userID = req.params.id

        const updatedUserData = req.body
        const response = await User.findByIdAndUpdate(userID, updatedUserData, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(402).json({
                error: 'person do not found'
            })
        }
        console.log('User Data Updated')
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'internal server error' })
    }
}
const deleteUser = async (req, res) => {
    try {
        const userID = req.params.id;
        console.log('userID', userID);

        const response = await User.findByIdAndDelete(userID);

        // Check if the user was found and deleted
        if (!response) {
            return res.status(404).json({
                error: 'User not found'
            });
        }

        console.log("User Data Deleted");
        return res.status(200).json({ message: "User Data Deleted Successfully" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};


module.exports = { getAllUser, createUser, updateUser, deleteUser }
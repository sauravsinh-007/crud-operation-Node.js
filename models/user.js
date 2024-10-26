const { uniq } = require('lodash')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    mobileNumber: {
        type: String,
        require: true

    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    dob: {
        type: String,
        require: true

    },
    gender: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    educationQualification: {
        type: String,
        require: true
    },
    streamOfEducation: {
        type: String,
        require: true
    },
    tenthPercentage: {
        type: Number,
        require: true
    },
    twelfthPercentage: {
        type: Number,
        require: true
    },
    highestGraduationPercentage: {
        type: Number,
    },


})

const User = mongoose.model('User', userSchema)

module.exports = User

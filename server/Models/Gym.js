const mongoose = require( "mongoose" );

const gymModel = new mongoose.Schema( {
    userId: {
        type: String,
        required: true,
    },
    exerciseName: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    metric: {
        type: String,
        required: true,
    },
}, {timestamps: true} );

const exercise = mongoose.model( "Gym", gymModel );

module.exports = exercise;
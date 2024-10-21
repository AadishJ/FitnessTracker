const express = require( "express" );
const router = express.Router();
const {handleGymGet, handleGymPost} = require("../Controllers/GymControl")
router
    .route( "/" )
    .get( ( req, res ) => handleGymGet( req, res ) )
    .post( ( req, res ) => handleGymPost( req, res ) );

module.exports = router;
const express = require( "express" );
const router = express.Router();
const {handleHomeGet} = require("../Controllers/LoginControl")
router
    .route( "/" )
    .get( ( req, res ) => handleHomeGet( req, res ) );

module.exports = router;
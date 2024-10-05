const express = require( "express" )
const app = express();
const PORT = 5000;
const HomeRouter = require( "./Routes/HomeRoute" )
const LoginRouter = require( "./Routes/LoginRoute" );
const SignupRouter = require( "./Routes/SignupRoute" );
app.use( "/", HomeRouter );
app.use( "/login", LoginRouter );
app.use( "/signup", SignupRouter );
app.listen( PORT, () => console.log( "Server Started" ) );
const express = require( "express" )
const app = express();
const cors = require( 'cors' );
const bodyParser = require( "body-parser" );
require( "dotenv" ).config();
const PORT = process.env.PORT || 5000;
const HomeRouter = require( "./Routes/HomeRoute" )
const LoginRouter = require( "./Routes/LoginRoute" );
const SignupRouter = require( "./Routes/SignupRoute" );
const DashboardRouter = require("./Routes/DashBoardRoute")
const {restrictToLoggedInUserOnly,checkAuth} = require("./Middlewares/Authenticator")
const cookieParser = require("cookie-parser");
const connectMongoDB = require( './Config/Connect' );
const { LoginValidation, SignupValidation } = require( "./Middlewares/AuthValid" );
app.use( cookieParser() );

app.use(cors({
    origin: process.env.CLIENT, 
    credentials: true, 
} ) );
connectMongoDB( process.env.MONGO ).then( () => console.log( "MongoDB connected" ) ).catch( ( err ) => console.log( "Error Occured: ", err ) );

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.use( "/", HomeRouter );
app.use( "/login", LoginValidation ,LoginRouter );
app.use( "/signup", SignupValidation,SignupRouter );
app.use( "/dashboard", DashboardRouter );

app.listen( PORT, () => console.log( "Server Started on", PORT ) );
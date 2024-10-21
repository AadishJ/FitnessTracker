const express = require( "express" )
const app = express();

const cors = require( 'cors' );
const bodyParser = require( "body-parser" );
const cookieParser = require( "cookie-parser" );

app.use( cookieParser() );
app.use(cors({ origin: process.env.CLIENT, credentials: true, } ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

require( "dotenv" ).config();

const PORT = process.env.PORT || 5000;


const HomeRouter = require( "./Routes/HomeRoute" )
const LoginRouter = require( "./Routes/LoginRoute" );
const SignupRouter = require( "./Routes/SignupRoute" );
const DashboardRouter = require( "./Routes/DashBoardRoute" )
const GymRouter = require( "./Routes/GymRoute" );


const {checkAuth} = require("./Middlewares/Authenticator")

const connectMongoDB = require( './Config/Connect' );
connectMongoDB( process.env.MONGO ).then( () => console.log( "MongoDB connected" ) ).catch( ( err ) => console.log( "Error Occured: ", err ) );
const { LoginValidation, SignupValidation } = require( "./Middlewares/AuthValid" );


app.use( "/", HomeRouter );
app.use( "/login", LoginValidation ,LoginRouter );
app.use( "/signup", SignupValidation,SignupRouter );
app.use( "/dashboard", DashboardRouter );
app.use( "/gym",checkAuth, GymRouter );

app.listen( PORT, () => console.log( "Server Started on", PORT ) );
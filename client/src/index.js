import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import "./index.css"
import "react-toastify/ReactToastify.css"
import { GoogleOAuthProvider } from '@react-oauth/google';


let div = document.getElementById( "root" );
const root = ReactDOM.createRoot( div );
root.render(
    <GoogleOAuthProvider clientId="1059449363627-44r4lag3a2omf9ni1qe9pgl50l404r21.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
);
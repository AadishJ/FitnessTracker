import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import "./index.css"
import "react-toastify/ReactToastify.css"

let div = document.getElementById( "root" );
const root = ReactDOM.createRoot( div );
root.render( <App /> );
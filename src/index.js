import React from 'react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// import {
//   BrowserRouter as Router,
// 	Routes,
//   Route,
//   Link
// } from "react-router-dom";

import './vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/fontawesome.css'
import './assets/css/templatemo-edu-meeting.css'
import './assets/css/owl.css'
import './assets/css/lightbox.css'

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import React from 'react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/fontawesome.css'
import './assets/css/templatemo-edu-meeting.css'

render(
	<BrowserRouter basename="/hispacon2021">
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

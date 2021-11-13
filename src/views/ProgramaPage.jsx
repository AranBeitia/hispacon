import HeaderNav from '../components/HeaderNav/HeaderNav'
import Footer from '../components/Footer'
import Card from '../components/Card'

import data from '../assets/data/programa.json'

import image from '../assets/images/template/meeting-01.jpg'
import { useState } from 'react'

export default function ProgramaPage() {

	let [events, setEvents] = useState(data)

	let changeEvents = () => {
		setEvents()
	}

	return (
		<div>
			<HeaderNav />
			<h1>Programa page</h1>
			<div className="card-container">
				{events.map((cardInfo, index) => (
					<Card key={index} title={cardInfo.title} description={cardInfo.description} day={cardInfo.day} hour={cardInfo.hour} image={image} videoLink={cardInfo.videoLink} />
				))}
			</div>
			<Footer />
		</div>
	)
}
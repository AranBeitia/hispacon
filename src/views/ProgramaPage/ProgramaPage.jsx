import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import data from '../../assets/data/programa.json'
import './ProgramaPage.style.css'
import ignotus from '../../assets/images/events/ignotus.jpg'
import visiones from '../../assets/images/events/visiones.jpg'
import opportunity from '../../assets/images/events/opportunity.jpg'
import Hero from '../../components/Hero/Hero'
import { useState, useEffect } from 'react'

export default function ProgramaPage() {

	let [events, setEvents] = useState(data)
	let [day, setDay] = useState(null)
	let [pinnedEvents, setPinnedEvents] = useState([])
	let [pinnedEventsExists, setPinnedEventExists] = useState()

	useEffect(() => {
		if (localStorage.getItem('pinnedEvents')) {
			setPinnedEvents(JSON.parse(localStorage.getItem('pinnedEvents')))
			setPinnedEventExists(true)
		}
	}, [])

	let getImagePath = (image) => {
		switch (image) {
			case "ignotus":
				return ignotus
			case "visiones":
				return visiones
			case "opportunity":
				return opportunity
			default:
				break;
		}
	}

	function getEventsDay(selectedDay) {
		if (selectedDay === "all") {
			setEvents(data)
			setDay(null)
		} else {
			let eventsDay = data.filter(event => parseInt(event.day) === selectedDay)
			setEvents(eventsDay)
			setDay(selectedDay)
		}
	}

	function getEventsRoom(selectedRoom) {
		if (selectedRoom === "all" && day !== null) {
			let eventsDay = data.filter(event => parseInt(event.day) === day)
			setEvents(eventsDay)
		} else if (selectedRoom === "all" && day === null) {
			return
		} else {
			if (day === null) {
				let allEventsPerRoom = data.filter(event => (event.room) === selectedRoom)
				setEvents(allEventsPerRoom)
			} else {
				let eventsDayPerRoom = data.filter(event => ((event.room) === selectedRoom) && (parseInt(event.day) === day))
				setEvents(eventsDayPerRoom)
			}
		}
	}

	function getPinnedEvents() {
		if (pinnedEventsExists) {
			setEvents(pinnedEvents)
		}
	}

	function handlePinnedEvent(action, id) {
		if (action === "save") {
			let eventForHandle = data.filter(event => (event.id === id))
			let newPinnedEvents = []
			setPinnedEvents((prevState) => {
				newPinnedEvents = [...prevState, ...eventForHandle]
				return newPinnedEvents
			})
			setTimeout(() => {saveToLocalStorage(newPinnedEvents)}, 500)
		} else if (action === "delete") {
			let newPinnedEvents = []
			setPinnedEvents((prevState) => {
				newPinnedEvents = prevState.filter(event => (event.id !== id))
				return newPinnedEvents
			})
			setTimeout(() => {saveToLocalStorage(newPinnedEvents)}, 500)
		}
  }

	function saveToLocalStorage(pinnedEvents) {
		localStorage.setItem('pinnedEvents', JSON.stringify(pinnedEvents))

		if (localStorage.getItem('pinnedEvents').length === 2) {
				localStorage.removeItem('pinnedEvents')
		}
	}

	function isPinned(id) {
		let eventsInLocalStorage = []
		if (localStorage.getItem('pinnedEvents')) {
			eventsInLocalStorage = JSON.parse(localStorage.getItem('pinnedEvents'))
		}
		let search = eventsInLocalStorage.filter(event => (event.id === id))
		let [ result ] = search
		return !!result
	}

	return (
		<div>
			<HeaderNav />
			<Hero title={'programa'} description={'programita'}/>
			<section className="wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="row">
								<div className="col-lg-12">
									<div className="filters">
									{pinnedEvents.length > 0 ?
										<ul>
											<li onClick={() => {getEventsDay("all")}}>Todos</li>
											<li onClick={getPinnedEvents}>Mostrar favoritos</li>
										</ul>
										:
										null}
											<ul>
												<li onClick={() => {getEventsDay("all")}}>Todos</li>
												<li onClick={() => {getEventsDay(19)}}>19</li>
												<li onClick={() => {getEventsDay(20)}}>20</li>
												<li onClick={() => {getEventsDay(21)}}>21</li>
											</ul>
											<ul>
												<li onClick={() => {getEventsRoom("all")}}>Todos</li>
												<li onClick={() => {getEventsRoom("Ignotus")}}>Ignotus</li>
												<li onClick={() => {getEventsRoom("Visiones")}}>Visiones</li>
												<li onClick={() => {getEventsRoom("Opportunity")}}>Opportunity</li>
												<li onClick={() => {getEventsRoom("Jornadas")}}>Jornadas</li>
												<li onClick={() => {getEventsRoom("Externos")}}>Externos</li>
											</ul>
									</div>
								</div>
							</div>
						</div>
						{events.map((cardInfo) => (
							<Card
								key={cardInfo.id}
								id={cardInfo.id}
								title={cardInfo.title}
								description={cardInfo.description}
								day={cardInfo.day}
								hour={cardInfo.hour}
								image={getImagePath(cardInfo.image)}
								videoLink={cardInfo.videoLink}
								pinEvent={isPinned(cardInfo.id)}
								handlePinnedEvent={handlePinnedEvent}
								isPinned={isPinned}
							/>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}
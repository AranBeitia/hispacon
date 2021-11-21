import { useState } from 'react'

import './Card.style.scss'

import youtubeIcon from '../../assets/images/icons/youtube-icon.svg'
import twitchIcon from '../../assets/images/icons/twitch-icon.svg'
import eventbriteIcon from '../../assets/images/icons/eventbrite-icon.svg'
import bookmarkOutline from '../../assets/images/icons/bookmark-outline.svg'
import bookmarkFull from '../../assets/images/icons/bookmark-full.svg'

export default function Card({
	id,
	title,
	description,
	day,
	hour,
	image,
	videoLink,
	pinEvent,
	handlePinnedEvent,
	isPinned,
	platform
}) {
	let [pinned, setPinned] = useState(pinEvent)

	function handlePinClick(action, id) {
		handlePinnedEvent(action, id)
		setPinned(!pinned)
	}

	function getPlatformImg(platform) {
		switch (platform) {
			case "Youtube":
				return youtubeIcon
			case "Twitch":
				return twitchIcon
			case "Eventbrite":
				return eventbriteIcon
			default:
				break;
		}
	}

	return (
		<div className="meeting-item card-item">
			<div className="thumb">
				<div className="price">
					<span>{hour}</span>
				</div>
				{pinned ? (
					<div className="pin-event">
						<img
							src={bookmarkFull}
							alt="Eliminar evento de favoritos"
							onClick={() => {
								handlePinClick('delete', id)
							}}
						/>
					</div>
				) : (
					<div className="pin-event">
						<img
							src={bookmarkOutline}
							alt="Guardar evento como favorito"
							onClick={() => {
								handlePinClick('save', id)
							}}
						/>
					</div>
				)}
				<img src={image} alt={title} />
			</div>
			<div className="card-item__down-content">
				<div className="card-item__date">
					<h6>
						Nov <span>{day}</span>
					</h6>
					{videoLink === null ? null : (
						<a href={videoLink} target="_blank" rel="noreferrer">
							<img
								src={getPlatformImg(platform)}
								alt="Ir a retransmisión en directo"
								className="stream-icon"
							/>
						</a>
					)}
				</div>
				<h4>{title}</h4>
				<div className="text-content --scroll-hidden">
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}

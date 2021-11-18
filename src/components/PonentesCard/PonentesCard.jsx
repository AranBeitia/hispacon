import { useState } from 'react'

import TheModal from '../../components/TheModal/TheModal'

import './PonentesCard.style.scss'

export default function PonentesCard({
	name,
	lastName,
	alias,
	logo,
	link,
	bio,
}) {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<div className="feria-card" onClick={handleShow}>
				<div className="thumb feria-card__thumb">
					<img
						className="feria-card__img"
						src={logo}
						loading="lazy"
						alt={`Imagen de ${name}`}
					/>
				</div>
				<div className="feria-card__down-content">
					<h4 className="feria-card__title">
						{name} {lastName} {alias ? `"${alias}"` : null}
					</h4>
					<div className="text-content">
						<p className="feria-card__text">{bio}</p>
					</div>
				</div>
			</div>
			<TheModal
				show={show}
				close={handleClose}
				name={name}
				lastName={lastName}
				alias={alias}
				image={logo}
				bio={bio}
			/>
		</>
	)
}

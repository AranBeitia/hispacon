import { useState } from 'react'
import './PonentesCard.style.scss'
import TheModal from '../../components/TheModal/TheModal'

export default function PonentesCard({
	name,
	lastName,
	alias,
	logo,
	link,
	benefit,
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
						<p className="feria-card__text">{benefit}</p>
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
				benefit={benefit}
			/>
		</>
	)
}

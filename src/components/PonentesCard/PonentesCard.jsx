import { useState } from 'react'
import './PonentesCard.style.scss'
import Button from 'react-bootstrap/Button'
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
			<div className="p-card" onClick={handleShow}>
				<div className="thumb p-card__thumb">
					<img
						className="p-card__img"
						src={logo}
						loading="lazy"
						alt={`Imagen de ${name}`}
					/>
				</div>
				<div className="p-card__down-content">
					<h4 className="p-card__title">
						{name} {lastName} {alias ? `"${alias}"` : null}
					</h4>
					<Button variant="dark" onClick={handleShow}>
						Ver biografía
					</Button>
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

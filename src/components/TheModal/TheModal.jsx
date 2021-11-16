import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export default function TheModal({ name, lastName, alias, image, benefit }) {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						{name} {lastName} {alias ? `"${alias}"` : null}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image src={image} fluid />
					{benefit}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

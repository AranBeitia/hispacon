import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import parse from 'html-react-parser'

import './TheModal.scss'

export default function TheModal({
	name,
	lastName,
	alias,
	image,
	bio,
	show,
	close,
}) {

	let cleanBio = bio
	if (bio) cleanBio = bio.replace(/(?:\r\n|\r|\n)/g, '<br><br>');

	return (
		<>
			<Modal show={show} onHide={close} dialogClassName="modal-90w">
				<Modal.Header closeButton>
					<Modal.Title>
						{name} {lastName} {alias ? `"${alias}"` : null}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image src={image} className="modal__img" fluid />
					{typeof cleanBio === "string" ? <p className="modal__text">{parse(cleanBio)}</p> : null }
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={close}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

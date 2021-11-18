import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import './TheModal.scss'

export default function TheModal({
	name,
	lastName,
	alias,
	image,
	benefit,
	show,
	close,
}) {
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
					<p className="modal__text">{benefit}</p>
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

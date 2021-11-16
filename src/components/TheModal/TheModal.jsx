import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

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
			<Modal show={show} onHide={close}>
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
					<Button variant="secondary" onClick={close}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

import TheModal from '../../components/TheModal/TheModal'
import './FeriaCard.style.scss'

export default function FeriaCard({
	name,
	lastName,
	alias,
	logo,
	link,
	benefit,
}) {
	// let getBio = () => {
	//   fetch(bio)
	//   .then(response => response.text())
	//   .then(text => text)
	// }
	// const [show, setShow] = useState(false)
	// const handleClose = () => setShow(false)
	// const handleShow = () => setShow(true)

	return (
		<>
			<a href={link} target="_blank" rel="noreferrer">
				<div className="feria-card">
					<div className="thumb feria-card__thumb">
						<img
							className="feria-card__img"
							src={logo}
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
			</a>
			<TheModal
				name={name}
				lastName={lastName}
				alias={alias}
				image={logo}
				benefit={benefit}
			/>
		</>
	)
}

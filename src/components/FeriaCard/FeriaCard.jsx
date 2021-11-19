import './FeriaCard.style.scss'
import Button from 'react-bootstrap/Button'

export default function FeriaCard({
	name,
	lastName,
	alias,
	logo,
	link,
	benefit,
}) {
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
						<Button href={link} variant="dark">
							Ver más
						</Button>
					</div>
				</div>
			</a>
		</>
	)
}

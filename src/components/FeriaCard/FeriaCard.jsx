import Button from 'react-bootstrap/Button'
import parse from 'html-react-parser'

import './FeriaCard.style.scss'

export default function FeriaCard({
	name,
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
						<h4 className="feria-card__title">{name}</h4>
						<div className="text-content">
							<p className="feria-card__text">{typeof benefit === "string" ? parse(benefit) : null}</p>
						</div>
						<Button href={link} target="_blank" rel="noreferrer" variant="dark" className="feria-card__btn">
							Comprar
						</Button>
					</div>
				</div>
			</a>
		</>
	)
}

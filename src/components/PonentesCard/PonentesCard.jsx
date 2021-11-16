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
	return (
		<>
			<a href={link}>
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

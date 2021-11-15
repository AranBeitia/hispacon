import {
	AACC,
	AKIRA,
	GIGAMESH,
	INSOLITA,
	MUNDOS,
	MUSEOS,
	QCENTER,
	ROSSA,
	SHOGUN,
	UMA,
	DUERMEVELA,
} from '../../assets/images/partners'
import './Footer.style.scss'

export default function Footer() {
	return (
		<section className="footer-bg">
			<footer className="footer">
				<div className="partners-container">
					<img src={AACC} alt="Partner" />
					<img src={AKIRA} alt="Partner" />
					<img src={GIGAMESH} alt="Partner" />
					<img src={INSOLITA} alt="Partner" />
					<img src={MUNDOS} alt="Partner" />
					<img src={MUSEOS} alt="Partner" />
					<img src={QCENTER} alt="Partner" />
					<img src={ROSSA} alt="Partner" />
					<img src={SHOGUN} alt="Partner" />
					<img src={UMA} alt="Partner" />
					<img src={DUERMEVELA} alt="Partner" />
				</div>
				<p>
					Copyright © {new Date().getFullYear()} Pórtico · Asociación Española
					de Fantasía, Ciencia Ficción y Terror · Todos los derechos reservados
				</p>
			</footer>
		</section>
	)
}

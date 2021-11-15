import {
	CRISIS,
	EXITOCRITICO,
	EXREGNUM,
	FRIKI,
	GRAPAS,
	HT,
	IKAN,
	NAUFRAGIO,
	NOSOLOROL,
	OTHER,
	SEIJO,
	SHADOW,
	SUGAAR,
	UNLEASHED,
} from '../../assets/images/partners-jornadas'
import './Footer.style.scss'

export default function Footer() {
	return (
		<section className="footer-bg">
			<footer className="footer">
				<div className="partners-container">
					<img src={CRISIS} alt="Partner" />
					<img src={EXITOCRITICO} alt="Partner" />
					<img src={EXREGNUM} alt="Partner" />
					<img src={FRIKI} alt="Partner" />
					<img src={GRAPAS} alt="Partner" />
					<img src={HT} alt="Partner" />
					<img src={IKAN} alt="Partner" />
					<img src={NAUFRAGIO} alt="Partner" />
					<img src={NOSOLOROL} alt="Partner" />
					<img src={OTHER} alt="Partner" />
					<img src={SEIJO} alt="Partner" />
					<img src={SHADOW} alt="Partner" />
					<img src={SUGAAR} alt="Partner" />
					<img src={UNLEASHED} alt="Partner" />
				</div>
				<p>
					Copyright © {new Date().getFullYear()} Pórtico · Asociación Española
					de Fantasía, Ciencia Ficción y Terror · Todos los derechos reservados
				</p>
			</footer>
		</section>
	)
}

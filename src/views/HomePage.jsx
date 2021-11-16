import HeaderNav from '../components/HeaderNav/HeaderNav'
import Splashpage from '../components/Splashpage'
import Footer from '../components/Footer/Footer'

import homeVideo from '../assets/video/home.mp4'

export default function PonentesPage() {
	let text =
		'Te damos la bienvenida a la HispaCón, el evento de ciencia ficción, fantasía y terror organizado por Pórtico. Tenemos charlas, tenemos rol, tenemos premios y tenemos microsedes presenciales en A Coruña, Alicante, Barcelona, Madrid, Málaga, Salamanca, y Zaragoza. Desde cerca o desde lejos, la HispaCón te ofrece algo que te apasionará. Pasa y acomódate.'

	return (
		<>
			<HeaderNav />
			<Splashpage
				subtitle="¡Bienvenido!"
				title="Hispacon 2021"
				description={text}
				linkText="Ver programa"
				link="/programa"
				video={homeVideo}
			/>
			<Footer />
		</>
	)
}

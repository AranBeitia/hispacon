import HeaderNav from '../components/HeaderNav/HeaderNav'
import Splashpage from '../components/Splashpage'
import Footer from '../components/Footer/Footer'

import homeVideo from '../assets/video/home.mp4'

export default function PonentesPage() {

	// let text = "Un año más, podemos daros la bienvenida a la HispaCón, el evento de ciencia ficción, fantasía y terror organizado por Pórtico. Este 2021 ha sido complicado y nos ha obligado a volver a organizar la convención de manera telemática. Sin embargo, no queríamos quedarnos sin la posibilidad de vernos las caras, así que también hemos organizado muchas charlas en diferentes sedes de toda la península. Salamanca, Zaragoza, Málaga, Alicante, A Coruña, Barcelona y Madrid son las ciudades en las que podréis acudir a las charlas. Y a los que estas ciudades os quedan lejos, no os preocupéis. ¡Estamos seguros de que podremos encontrarnos cara a cara en 2022! De momento, os invitamos a disfrutar de todas las actividades preparadas para este año."
	let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut bibendum erat. Suspendisse et feugiat neque, sed viverra augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a libero fringilla, auctor augue id, congue dolor."

	return (
		<>
			<HeaderNav />
			<Splashpage
				subtitle="¡Bienvenido!"
				title="Hispacon 2021"
				description={lorem}
				linkText="Ver programa"
				link="/programa"
				video={homeVideo}
			/>
			<Footer />
		</>
	)
}

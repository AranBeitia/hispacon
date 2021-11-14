import HeaderNav from '../components/HeaderNav/HeaderNav'
import Splashpage from '../components/Splashpage'
import Footer from '../components/Footer/Footer'

import homeVideo from '../assets/video/home.mp4'

export default function PonentesPage() {
	return (
		<>
			<HeaderNav />
			<Splashpage
				subtitle="¡Bienvenido!"
				title="Hispacon 2021"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut bibendum erat. Suspendisse et feugiat neque, sed viverra augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a libero fringilla, auctor augue id, congue dolor."
				linkText="Ver programa"
				link="#contact"
				video={homeVideo}
			/>
			<Footer />
		</>
	)
}

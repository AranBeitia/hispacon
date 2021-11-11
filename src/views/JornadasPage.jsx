import Header from '../components/Header'
import Splashpage from '../components/Splashpage'
import Footer from '../components/Footer'
import pdfPortico from '../assets/docs/jornadasPortico.pdf'
import jornadasVideo from '../assets/video/jornadas.mp4'

export default function PonentesPage() {
	return (
		<>
			<Header />
			<Splashpage
				subtitle="Lorem impusom dolor"
				title="Jornadas Pórtico 2021"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut bibendum erat. Suspendisse et feugiat neque, sed viverra augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a libero fringilla, auctor augue id, congue dolor."
				linkText="Descargar PDF"
				link={pdfPortico}
				video={jornadasVideo}
			/>
			<Footer />
		</>
	)
}

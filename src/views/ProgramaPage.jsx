import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

import image from '../assets/images/template/meeting-01.jpg'

export default function ProgramaPage() {
	return (
		<div>
			<Header />
			<h1>Programa page</h1>
			<h1>Programa page</h1>
			<h1>Programa page</h1>
			<h1>Programa page</h1>
			<h1>Programa page</h1>
			<h1>Programa page</h1>
			<h1>Programa page</h1>
			<Card
				title="El amor en tiempos del cólera y otras pandemias"
				description="Esta es una descripción de qué podremos ver en la charla, con Pepito Jiménez y Sofía Mazagatos"
				day="19"
				hour="12:00 - 13:00"
				image={image}
				videoLink=""
			/>
			<Footer />
		</div>
	)
}

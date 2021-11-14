import HeaderNav from '../components/HeaderNav/HeaderNav'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'

export default function PonentesPage() {
	return (
		<div>
			<HeaderNav />
			<Hero
				title={'Ponentes'}
				description={'Ponentes'}
			/>
			<h1>Ponentes page</h1>
			<Footer />
		</div>
	)
}

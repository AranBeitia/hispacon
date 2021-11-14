import HeaderNav from '../components/HeaderNav/HeaderNav'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'

export default function PonentesPage() {
	return (
		<div>
			<HeaderNav />
			<Hero
				id={2}
				title={'Ponentes'}
				description={'Ponentes'}
			/>
			<Footer />
		</div>
	)
}

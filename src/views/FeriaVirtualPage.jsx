import HeaderNav from '../components/HeaderNav/HeaderNav'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'

export default function FeriaVirtualPage() {
	return (
		<>
			<HeaderNav />
			<Hero
				title={'Segunda Feria Virtual del libro de género'}
				description={'Feria virtual'}
			/>
			<h1>FeriaVirtualPage</h1>
			<Footer />
		</>
	)
}

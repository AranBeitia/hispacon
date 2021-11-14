import HeaderNav from '../components/HeaderNav/HeaderNav'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'

export default function FeriaVirtualPage() {
	return (
		<>
			<HeaderNav />
			<Hero
				id={2}
				title={'Segunda Feria Virtual del libro de género'}
				description={'Feria virtual'}
			/>
			<Footer />
		</>
	)
}

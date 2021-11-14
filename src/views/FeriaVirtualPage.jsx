import HeaderNav from '../components/HeaderNav/HeaderNav'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer'

export default function FeriaVirtualPage() {
	return (
		<>
			<HeaderNav />
			<Hero
				// bgImage={bgImage}
				// title={title}
				// subtitle={subtitle}
			/>
			<h1>FeriaVirtualPage</h1>
			<Footer />
		</>
	)
}

import HeaderNav from '../components/HeaderNav/HeaderNav'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'

import PonentesCard from '../components/PonentesCard/PonentesCard'

import IMAGES from '../assets/data/ponentes-img.js'
import BIOS from '../assets/data/ponentes-bio.js'

import data from '../assets/data/ponentes.json'

export default function PonentesPage() {
	return (
		<div>
			<HeaderNav />
			<Hero id={2} title={'Ponentes'} description={'Ponentes'} />
			{data.map((ponente, index) => (
				<PonentesCard
					key={index}
					id={ponente.id}
					name={ponente.name}
					lastName={ponente.lastName}
					alias={ponente.alias}
					image={IMAGES[ponente.id]}
					bio={BIOS[ponente.id]}
				/>
			))}

			<Footer />
		</div>
	)
}

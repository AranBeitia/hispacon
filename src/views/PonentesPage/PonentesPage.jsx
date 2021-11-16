import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
// import TheModal from '../../components/TheModal/TheModal'
import FeriaCard from '../../components/FeriaCard/FeriaCard'

import IMAGES from '../../assets/data/ponentes-img.js'
import BIOS from '../../assets/data/ponentes-bio.js'

import data from '../../assets/data/ponentes.json'

export default function PonentesPage() {
	return (
		<div>
			<HeaderNav />
			<Hero id={2} title={'Ponentes'} description={'Ponentes'} />
			{/* <TheModal /> */}
			<section className="wrapper">
				<div className="container">
					<div className="grid-layout">
						{data.map((ponente, index) => (
							<FeriaCard
								key={index}
								id={ponente.id}
								name={ponente.name}
								lastName={ponente.lastName}
								alias={ponente.alias}
								logo={IMAGES[ponente.id]}
								benefit={BIOS[ponente.id]}
							/>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}

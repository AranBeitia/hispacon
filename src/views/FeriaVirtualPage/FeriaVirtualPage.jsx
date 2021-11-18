import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Hero from '../../components/Hero/Hero'
import FeriaCard from '../../components/FeriaCard/FeriaCard'
import Footer from '../../components/Footer/Footer'

import data from '../../assets/data/feria.json'

import LOGOS from '../../assets/data/editoriales-feria.js'

export default function FeriaVirtualPage() {
	return (
		<>
			<HeaderNav />
			<Hero
				id={2}
				title={'Segunda Feria Virtual del libro de género'}
				description={'Feria virtual'}
			/>
			<section className="wrapper">
				<div className="container">
					<div className="grid-layout">
						{data.map((cardInfo, index) => (
							<FeriaCard
								key={index}
								id={cardInfo.id}
								name={cardInfo.name}
								logo={LOGOS[cardInfo.logo]}
								link={cardInfo.link}
								benefit={cardInfo.benefit}
							/>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}
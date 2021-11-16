import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import PonentesCard from '../../components/PonentesCard/PonentesCard'

import IMAGES from '../../assets/data/ponentes-img.js'
import BIOS from '../../assets/data/ponentes-bio.js'

import data from '../../assets/data/ponentes.json'
import { useRef, useState } from 'react'

export default function PonentesPage() {
	let [ponentes, setPonentes] = useState(data)
	let searchField = useRef()

	function search() {
		let query = searchField.current.value
		if (searchField.current.value === '') {
			setPonentes(data)
		} else {
			let matches = []
			data.forEach((ponente) => {
				let cleanQuery = query.replace(/\s/g, '').toLowerCase()
				let cleanName = ponente.name?.replace(/\s/g, '').toLowerCase()
				let cleanLastName = ponente.lastName?.replace(/\s/g, '').toLowerCase()
				let cleanAlias = ponente.alias?.replace(/\s/g, '').toLowerCase()
				let ponenteSum = cleanName + cleanLastName + cleanAlias
				let cleanPonente = ponenteSum.replace('undefined', '')
				if (cleanPonente.includes(cleanQuery)) {
					matches.push(ponente)
				}
				setPonentes(matches)
			})
		}
	}

	return (
		<div>
			<HeaderNav />
			<Hero id={3} title={'Participantes de la HispaCón'} description={'Ponentes'} />
			<section className="wrapper">
				<div className="container">
					<input
						ref={searchField}
						onChange={search}
						type="text"
						placeholder="Buscar"
					/>
					<div className="grid-layout">
						{ponentes.map((ponente) => (
							<PonentesCard
								key={ponente.id}
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

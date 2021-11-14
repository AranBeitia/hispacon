import HeaderNav from '../components/HeaderNav/HeaderNav'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'

import data from '../../assets/data/feria.json'

import aloha from '../../assets/images/feria/aloha.png'
import arima from '../../assets/images/feria/arima.png'
import aristas from '../../assets/images/feria/aristas.png'
import carfax from '../../assets/images/feria/carfax.png'
import cerbero from '../../assets/images/feria/cerbero.png'
import crononauta from '../../assets/images/feria/crononauta.png'
import dmentes from '../../assets/images/feria/dmentes.png'
import dorna from '../../assets/images/feria/dorna.png'
import duermevela from '../../assets/images/feria/duermevela.png'
import insomnia from '../../assets/images/feria/insomnia.png'
import literup from '../../assets/images/feria/literup.png'
import loba from '../../assets/images/feria/loba.png'
import maimes from '../../assets/images/feria/maimes.png'
import obscura from '../../assets/images/feria/obscura.png'
import pezplata from '../../assets/images/feria/pezplata.gif'
import ping from '../../assets/images/feria/ping.png'
import pluma from '../../assets/images/feria/pluma.png'
import premium from '../../assets/images/feria/premium.png'
import raigvert from '../../assets/images/feria/raigvert.jpg'
import roomie from '../../assets/images/feria/roomie.png'
import FeriaCard from '../../components/FeriaCard/FeriaCard'

export default function FeriaVirtualPage() {

	let getImagePath = (image) => {
		switch (image) {
			case "aloha":
				return aloha
			case "arima":
				return arima
			case "aristas":
				return aristas
			case "carfax":
				return carfax
			case "cerbero":
				return cerbero
			case "crononauta":
				return crononauta
			case "dmentes":
				return dmentes
			case "dorna":
				return dorna
			case "duermevela":
				return duermevela
			case "insomnia":
				return insomnia
			case "literup":
				return literup
			case "loba":
				return loba
			case "maimes":
				return maimes
			case "obscura":
				return obscura
			case "pezplata":
				return pezplata
			case "ping":
				return ping
			case "pluma":
				return pluma
			case "premium":
				return premium
			case "raigvert":
				return raigvert
			case "roomie":
				return roomie
			default:
				break;
		}
	}

	return (
		<>
			<HeaderNav />
			<Hero
				title={'Segunda Feria Virtual del libro de género'}
				description={'Feria virtual'}
			/>
			<h1>FeriaVirtualPage</h1>

			{data.map(cardInfo => 
				<FeriaCard
					id={cardInfo.id}
					name={cardInfo.name}
					logo={getImagePath(cardInfo.logo)}
					link={cardInfo.link}
					benefit={cardInfo.benefit}
				/>)}
			<Footer />
		</>
	)
}

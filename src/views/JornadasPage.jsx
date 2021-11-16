import HeaderNav from '../components/HeaderNav/HeaderNav'
import Splashpage from '../components/Splashpage'
import FooterPortico from '../components/Footer/FooterPortico'
import pdfPortico from '../assets/docs/jornadasPortico.pdf'
import jornadasVideo from '../assets/video/jornadas.mp4'

export default function PonentesPage() {

	let text = "Las Jornadas Pórtico son las jornadas de rol online, plurilingües, gratuitas y solidarias de la HispaCón 2021. Tienen lugar en nuestro servidor de Discord y, al igual que la HispaCón, se desarrollan durante del 19 al 21 de noviembre. Si deseas saber más sobre cuándo son, dónde son, qué partidas ofrecemos, quién puede participar, cómo hay que hacer para participar, por qué y para qué las hacemos, qué entidades nos patrocinan y otras cuestiones, descárgate el programa o únete a"

	return (
		<>
			<HeaderNav />
			<Splashpage
				title="Jornadas Pórtico 2021"
				description={text}
				linkText="Descargar PDF"
				link={pdfPortico}
				video={jornadasVideo}
				url={"https://discord.gg/dEHCazPzdc"}
				secondText={"nuestro servidor de Discord."}
			/>
			<FooterPortico />
		</>
	)
}

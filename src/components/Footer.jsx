import {AACC,	AKIRA,	GIGAMESH,	INSOLITA,	MUNDOS,	MUSEOS,	QCENTER,	ROSSA,	SHOGUN,	UMA} from '../assets/images/partners'

export default function Footer() {
  return (
    <section className="contact-us" id="contact">
    <div className="footer">
      <p>
        Copyright © {new Date().getFullYear()} Pórtico · Asociación Española de Fantasía, Ciencia Ficción y Terror · Todos los derechos reservados
        <br />
      </p>
      <div className="partners-container">

        <div className="partner-img">
          <img src={AACC} alt="Partner" />
        </div>
        <div className="partner-img">
          <img src={AKIRA} alt="Partner" />
        </div>
        <div className="partner-img">
          <img src={GIGAMESH} alt="Partner" />
        </div>
        <div className="partner-img">
          <img src={INSOLITA} alt="Partner" />
        </div>
        <div className="partner-img">
          <img src={MUNDOS} alt="Partner" />
        </div>
        <div className="partner-img">
          <img src={MUSEOS} alt="Partner" />
        </div>
        <div className="partner-img">
          <img src={QCENTER} alt="Partner" />
        </div>
        <div className="partner-img">
          <img src={ROSSA} alt="Partner" />
        </div>
        <div className="partner-img">
          <img src={SHOGUN} alt="Partner" />
        </div>
        <div className="partner-img">
          <img src={UMA} alt="Partner" />
        </div>

      </div>
    </div>
  </section>
  )
}

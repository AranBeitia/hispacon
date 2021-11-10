import video from '../assets/video/background-video.mp4'

export default function Home() {
  return (
    <section className="section main-banner" id="top" data-section="section1"> {/* ESTE SECTION ES WRAPPER DE TODO EL "MAIN", PARA PODER HACER AQUÍ EL ROUTER */}
      <video autoplay muted loop id="bg-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="video-overlay header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="caption">
                <h6>¡Bienvenido!</h6>
                <h2>Hispacon 2021</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut bibendum erat. Suspendisse et feugiat neque, sed viverra augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque a libero fringilla, auctor augue id, congue dolor.
                </p>
                <div className="main-button-red">
                  <div className="scroll-to-section">
                    <a href="#contact">Ver programa</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
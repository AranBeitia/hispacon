

export default function Splashpage({subtitle, title, description, linkText, link, video}) {
  return (
    <section className="section main-banner" id="top" data-section="section1"> {/* ESTE SECTION ES WRAPPER DE TODO EL "MAIN", PARA PODER HACER AQUÍ EL ROUTER */}
      <video autoPlay muted loop id="bg-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="video-overlay header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="caption">
                <h6>{subtitle}</h6>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="main-button-red">
                  <div className="scroll-to-section">
                    <a href={link}>{linkText}</a>
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
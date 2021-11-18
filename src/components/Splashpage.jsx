import { Link } from "react-router-dom";


export default function Splashpage({subtitle, title, description, linkText, link, video, url, secondText, pdflink}) {
  return (
    <section className="section main-banner" id="top" data-section="section1">
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
                <p>{description} <a href={url} alt="Link to Discord" target="_blank" rel="noreferrer">{secondText}</a></p>
                <div className="main-button-red">
                  <div className="scroll-to-section">
                    {link ? <Link to={link}>{linkText} </Link> : <a href={pdflink} target="_blank" rel="noreferrer">{linkText}</a>}
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
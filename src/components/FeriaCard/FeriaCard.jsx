import './FeriaCard.style.scss'

export default function FeriaCard({ id, name, logo, link, benefit }) {
  return (
    <div className="meeting-item">
      <div className="thumb feria-card__thumb">
        <img src={logo} alt={`Logo de ${name}`} />
      </div>
      <div className="down-content text-content">
        <h4><a href={link} target="_blank" rel="noreferrer">{name}</a></h4>
        <p className="feria-card__text">{benefit}</p>
      </div>
    </div>
  )
}
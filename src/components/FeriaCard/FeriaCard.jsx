import './FeriaCard.style.scss'

export default function FeriaCard({ id, name, logo, link, benefit }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
    <div className="feria-card">
      <div className="thumb feria-card__thumb">
        <img className="feria-card__img" src={logo} alt={`Logo de ${name}`} />
      </div>
      <div className="feria-card__down-content">
        <h4 className="feria-card__title">{name}</h4>
        <div className="text-content">
        <p className="feria-card__text">{benefit}</p>
        </div>
      </div>
    </div>
    </a>
  )
}
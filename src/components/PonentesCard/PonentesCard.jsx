import './PonentesCard.style.scss'

export default function PonentesCard({ id, name, lastName, alias, image, bio }) {
  // let getBio = () => {
  //   fetch(bio)
  //   .then(response => response.text())
  //   .then(text => text)
  // }

  return (
    <div className="meeting-item">
      <div className="thumb feria-card__thumb">
        <img src={image} alt={`Foto de de ${name} ${lastName}`} />
      </div>
      <div className="down-content text-content">
        <h4>{name} {lastName} {alias ? `"${alias}"` : null}</h4>
        {/* <p className="feria-card__text">{getBio()}</p> */}
      </div>
    </div>
  )
}
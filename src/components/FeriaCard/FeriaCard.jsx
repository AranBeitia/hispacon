export default function FeriaCard({ id, name, logo, link, benefit }) {
  return (
    <div className="col-lg-4 templatemo-item-col">
      <div className="meeting-item">
        <div className="thumb">
          <img src={logo} alt={`Logo de ${name}`} />
        </div>
        <div className="down-content">
          <h4>{name}</h4>
          <p>Descripción</p>
        </div>
      </div>
    </div>
  )
}
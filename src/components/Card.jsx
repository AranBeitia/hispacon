import youtubeIcon from '../assets/images/icons/youtube-icon.svg'

export default function Card({ title, description, day, hour, image, videoLink }) {
  return (
    <div className="col-lg-4 templatemo-item-col all soon">
      <div className="meeting-item">
        <div className="thumb">
          <div className="price">
            <span>{hour}</span>
          </div>
          <img src={image} alt={title} />
        </div>
        <div className="down-content">
          <div className="date">
            <h6>Nov <span>{day}</span></h6>
          </div>
          <a href="meeting-details.html"><h4>{title}</h4></a>
          <p>{description}</p>
          <a href={videoLink}><img src={youtubeIcon} alt="Go to live Youtube Channel" /></a>
        </div>
      </div>
    </div>
  )
}

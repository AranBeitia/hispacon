import { useState } from 'react'

import youtubeIcon from '../assets/images/icons/youtube-icon.svg'
import bookmarkOutline from '../assets/images/icons/bookmark-outline.svg'
import bookmarkFull from '../assets/images/icons/bookmark-full.svg'

export default function Card({ id, title, description, day, hour, image, videoLink, pinEvent, handlePinnedEvent, isPinned }) {
  let [pinned, setPinned] = useState(pinEvent)

  function handlePinClick(action, id) {
    handlePinnedEvent(action, id)
    setPinned(!pinned)
  }

  return (
    <div className="col-lg-4 templatemo-item-col all soon">
      <div className="meeting-item">
        <div className="thumb">
          <div className="price" >
            <span>{hour}</span>
          </div>
          {(pinned) ? 
            <div className="pin-event" >
              <span><img src={bookmarkFull} alt="Eliminar evento de favoritos" onClick={() => {handlePinClick("delete", id)}} /></span>
            </div>
          :
            <div className="pin-event" >
              <span><img src={bookmarkOutline} alt="Guardar evento como favorito" onClick={() => {handlePinClick("save", id)}} /></span>
            </div>
          }
          <img src={image} alt={title} />
        </div>
        <div className="down-content">
          <div className="date">
            <h6>Nov <span>{day}</span></h6>
          </div>
          <a href="meeting-details.html"><h4>{title}</h4></a>
          <p>{description}</p>
          {videoLink === null ? null : <a href={videoLink}><img src={youtubeIcon} alt="Go to live Youtube Channel" className="youtube-icon" /></a> }
        </div>
      </div>
    </div>
  )
}
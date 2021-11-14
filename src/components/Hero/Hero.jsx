import React from 'react'
import './Hero.style.scss'

export default function Hero({title, description, id}) {
	return (
		<section className={`bg-img bg-img-${id} hero header-text`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h6>{title}</h6>
						<h2>{description}</h2>
					</div>
				</div>
			</div>
		</section>
	)
}

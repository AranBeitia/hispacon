import React from 'react'

export default function Hero({title, description}) {
	return (
		<section className="heading-page header-text" id="top">
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

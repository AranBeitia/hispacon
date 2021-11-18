import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo_hispacon.png'
import { Link, useLocation } from 'react-router-dom'

const BurguerBtn = styled.button`
	outline: none;
	border: 0;
	background: transparent;
`

export default function TheMenu() {
	const [isActive, setIsActive] = useState(false)
	const location = useLocation()
	const { pathname } = location
	const splitLocation = pathname.split('/')

	return (
		<header className="header-area header-sticky">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<nav className="main-nav">
							<Link to="/" className="logo">
								<img src={logo} alt="Logo Hispacon" className="header-logo" />
							</Link>
							<ul className="nav" style={{ display: isActive ? 'block' : '' }}>
								<li className="scroll-to-section">
									<Link
										to="/"
										className={splitLocation[1] === 'home' ? 'active' : ''}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/programa"
										className={splitLocation[1] === 'programa' ? 'active' : ''}
									>
										Programa
									</Link>
								</li>
								<li>
									<Link
										to="/ponentes"
										className={splitLocation[1] === 'ponentes' ? 'active' : ''}
									>
										Ponentes
									</Link>
								</li>
								<li>
									<Link
										to="/feriaVirtual"
										className={
											splitLocation[1] === 'feriaVirtual' ? 'active' : ''
										}
									>
										II FVLG
									</Link>
								</li>
								<li>
									<Link
										to="/jornadas"
										className={splitLocation[1] === 'jornadas' ? 'active' : ''}
									>
										Jornadas Pórtico
									</Link>
								</li>
							</ul>
							<BurguerBtn
								className={`menu-trigger ${isActive ? 'active' : ''}`}
								onClick={() => setIsActive(!isActive)}
							>
								<span>Menu</span>
							</BurguerBtn>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

import logo from '../assets/images/logo_hispacon.png'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <div className="left-content">
                {/* <p>This is an educational <em>HTML CSS</em> template by TemplateMo website.</p> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="right-icons">
                <ul>
                  <li><a href="https://twitter.com/Portico_AEFCFT"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/aefcft/"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="https://www.facebook.com/groups/101930899409"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.youtube.com/channel/UCq4vy03JJbvrGdq8IivsEvg"><i className="fa fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="/" className="logo">
                  <img src={logo} alt="Logo Hispacon" className="header-logo" />
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/programa">Programa</Link>
                  </li>
                  <li>
                    <Link to="/ponentes">Ponentes</Link>
                  </li>
                  <li>
                    <Link to="/feriaVirtual">II FVLG</Link>
                  </li>
                  <li>
                    <Link to="/jornadas">Jornadas Pórtico</Link>
                  </li>
                </ul>
                <button className='menu-trigger'>
                  <span>Menu</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

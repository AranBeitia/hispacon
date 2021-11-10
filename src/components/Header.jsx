import logo from '../assets/images/logo_hispacon.png'

export default function Header() {
  return (
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
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="meetings.html">Programa</a>
                </li>
                <li>
                  <a href="meetings.html">Ponentes</a>
                </li>
                <li>
                  <a href="meetings.html">Feria Virtual del libro de Género</a>
                </li>
                <li>
                  <a href="meetings.html">Jornadas Pórtico</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

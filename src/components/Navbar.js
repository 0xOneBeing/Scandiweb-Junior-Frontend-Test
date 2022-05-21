import logo from '../images/logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light .justify-content-center text-center">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="siteNavbar">
                <div className="navbar-nav links col-md-4">
                    <li className="nav-item"><a className="nav-link" href="#">Women</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Men</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Kids</a></li>
                </div>
                <div className="logo col-md-4">
                    <a className='navbar-brand' href='#'>
                        <img src={logo} width="30px" />
                    </a>
                </div>
                <div className="actions col-md-4">
                    <img src="" alt="$" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

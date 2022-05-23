import logo from '../images/logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light .justify-content-center text-center">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="siteNavbar">
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
                    <div className='col-md-6'>
                        <div className="row">
                            <div className="col">
                                <select className="currencySwitcher currency" name="currency" id='currency'>
                                    <option value="usd">$ USD</option>
                                    <option value="eur">€ EUR</option>
                                    <option value="jpy">¥ JPY</option>
                                </select>
                            </div>
                            <div className="col">
                                <div className="dropdown">
                                    <button className="shopping-cart-button" onclick="myFunction()" ><i class="fa-solid fa-cart-shopping"></i></button>
                                    <div className="cart-menu" id="dropdown">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                    </div>
                                </div>
                                {/* <span>
                                    <a className="shopping-cart-menu nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><i class="fa-solid fa-cart-shopping"></i></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Link</a></li>
                                        <li><a className="dropdown-item" href="#">Another link</a></li>
                                        <li><a className="dropdown-item" href="#">A third link</a></li>
                                    </ul>
                                </span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

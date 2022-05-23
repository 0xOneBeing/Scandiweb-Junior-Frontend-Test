import logo from '../images/logo.png'
import shoppingCartMenu from '../scripts/scripts'

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
                                    <button className="shopping-cart-button" onClick={shoppingCartMenu}><i className="fa-solid fa-cart-shopping"></i></button>
                                    <div className="cart-menu" id="dropdown">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

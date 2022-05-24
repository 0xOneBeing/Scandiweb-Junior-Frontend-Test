import logo from '../images/logo.png'
// import ShoppingCartMenu from '../scripts/Scripts'

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
                                    <option name="usd" value="usd">$ USD</option>
                                    <option name="eur" value="eur">€ EUR</option>
                                    <option name="jpy" value="jpy">¥ JPY</option>
                                </select>
                            </div>
                            <div className="col">
                                <div className="dropdown">
                                    {/* <button className="shopping-cart-button dropdown-toggle" data-toggle="dropdown" onClick={this.ShoppingCartMenu}><i className="fa-solid fa-cart-shopping"></i></button> */}
                                    <button type="button" className="shopping-cart-button btn dropdown-toggle" data-toggle="dropdown"><i className="fa-solid fa-cart-shopping"></i></button>
                                    <ul className="cart-menu dropdown-menu" id="dropdown">
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                    </ul>
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

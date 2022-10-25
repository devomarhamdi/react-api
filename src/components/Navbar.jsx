function Navbar() {
    return ( 
        <>
            <header id="header">
            <div className="siteHeader">
                <div className="wrapper clear">
                <a href="index.html" className="mobile-logo">
                </a>
                <ul className="mainMenu clear">
                    <li>
                    <a href="index.html">home</a>
                    </li>
                    <li>
                    <a href="#">Category</a>
                    <ul>
                        <li><a href="category.html">Category one</a></li>
                        <li><a href="category.html">Category two</a></li>
                        <li><a href="category.html">Category three</a></li>
                    </ul>
                    </li>
                </ul>
                <div className="pull-right clear">
                    <div className="headerSocialLinks clear">
                    <a href="#"><i className="fa fa-instagram" /></a>
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-heart" /></a>
                    <a href="#"><i className="fa fa-pinterest" /></a>
                    <a href="#"><i className="fa fa-google-plus" /></a>
                    </div>
                    <div className="searchIcon" />
                </div>
                <span className="showMobileMenu">
                    <span />
                    <span />
                    <span />
                    <span />
                </span>
                </div>	
            </div>
            <a href="#" className="logo">IT SHARKS 25</a>
        </header>

        </>
    );
}

export default Navbar;
import {Link} from 'react-router-dom';
import {useEffect , useState} from 'react';
function Navbar() {
    const[Categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getcategory.php')
        .then(res => res.json())
        .then(r => {
            setCategories(r);
        })
    },[])
    return ( 
        <>
        <header id="header">
            <div className="siteHeader">
                <div className="wrapper clear">
                <a href="index.html" className="mobile-logo">
                </a>
                <ul className="mainMenu clear">
                    <li>
                    <Link to={'/react-api/'}>home</Link>
                    </li>
                    <li>
                    <Link>Category</Link>
                    <ul>
                        {
                            Categories.map((category)=>{
                                return(
                                    <li><Link to={'/react-api/'+category.name}>{category.name}</Link></li>
                                );
                            })
                        }
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
            <a  className="logo">Final Project</a>
        </header>

        </>
    );
}

export default Navbar;
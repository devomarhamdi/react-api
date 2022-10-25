import {Link} from 'react-router-dom';
import {useEffect , useState} from 'react';

function Category() {
    const[postsByCategories, setPostsByCategories] = useState([]);

    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category=')
        .then(res => res.json())
        .then(r => {
            setPostsByCategories(r);
        })
    },[])

    return ( 
        <div className="archive category">
            <section className="container">
            <div className="wrapper clear">
                <div className="contentLeft">
                <div className="archivePageTitle"><span>Lifestyle</span></div>
                <div className="archivePostWrap">
                    <div className="archivePostItem">
                    <div className="archivePostTime">15.05.2015</div>
                    <h3 className="archivePostTitle"><Link to={'/single'}>WHEN LIFE GIVES YOU LEMONS DRINK TEQUILA</Link></h3>
                    <Link to={'/category'} className="archivePostCategory">Lifestyle</Link>
                    <Link to={'/single'} className="archivePostImg">
                        <img src="images/content/archivePostImg3.jpg" alt="Francoise img" />
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <div className="archivePostItemMeta">
                        <a href="#" className="archivePostItemComments">124 Comments</a>
                        <div className="archivePostItemShareLinks">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-pinterest" /></a>
                        </div>
                        <Link to={'/single'} className="archivePostReadMore">Read More</Link>
                    </div>
                    </div>
                </div>
                <div className="postPagination">
                    <ul className="clear">
                    <li className="newPosts"><a href="#">New posts</a></li>
                    <li className="olderPosts"><a href="#">Older posts</a></li>
                    </ul>
                </div>
                </div>
                <div className="sidebarRight">
                <div className="sidebar-widget">
                    <h3>About us</h3>
                    <div className="aboutMeWidget">
                    <img src="images/ourlogo.png" alt="Francoise img" />
                    <p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
                    </div>
                </div>
                <div className="sidebar-widget">
                    <h3>follow me</h3>
                    <div className="followMeSocialLinks">
                    <a href="#"><i className="fa fa-instagram" /></a>
                    <span />
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <span />
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <span />
                    <a href="#"><i className="fa fa-heart" /></a>
                    <span />
                    <a href="#"><i className="fa fa-pinterest" /></a>
                    <span />
                    <a href="#"><i className="fa fa-google-plus" /></a>
                    </div>
                </div>
                <div className="sidebar-widget">
                    <h3>Recent post</h3>
                    <div className="popularPostsWidget">
                    <div className="popularPostsWidgetItem">
                        <a href="#" className="popularPostsItemImg"><img src="images/content/popularPostImg.jpg" alt="Francoise img" /></a>
                        <time dateTime="2015-05-15">15.05.2015</time>
                        <h4><a href="#">MY BEDSIDE TABLE: THE CURATOR</a></h4>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="clear" />
            </section>

        </div>
    );
}

export default Category;
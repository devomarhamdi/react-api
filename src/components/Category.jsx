import {Link, useParams} from 'react-router-dom';
import {useEffect , useState} from 'react';

function Category() {
    var myparameters = useParams();
    var category = myparameters.category;

    const[postsByCategories, setPostsByCategories] = useState([]);

    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category='+category)
        .then(res => res.json())
        .then(r => {
            setPostsByCategories(r);
        })
    },[category])

    const[recent,setRecent] = useState([]);

    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getrecentpost.php')
        .then(res => res.json())
        .then(r => {
            setRecent(r);
        })
    },[])
    return ( 
        <div className="archive category">
            <section className="container">
            <div className="wrapper clear">
                <div className="contentLeft">
                {
                    postsByCategories.map((p)=>{
                        return(
                            <div className="archivePostWrap">
                                <div className="archivePageTitle"><span>{p.category}</span></div>
                    <div className="archivePostItem">
                    <div className="archivePostTime">{p.date}</div>
                    <h3 className="archivePostTitle"><Link to={`/`+p.category+`/`+p.id}>{p.title}</Link></h3>
                    <Link to={'/react-api/'+p.category} className="archivePostCategory">{p.category}</Link>
                    <Link to={`/react-api/`+p.category+`/`+p.id} className="archivePostImg">
                        <img src={`https://webeetec.com/itsharks24/blog/admin/`+p.image} alt="Francoise img" />
                    </Link>
                    <p>{p.description}</p>
                    <div className="archivePostItemMeta">
                        <a href="#" className="archivePostItemComments">124 Comments</a>
                        <div className="archivePostItemShareLinks">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-pinterest" /></a>
                        </div>
                        <Link to={`/react-api/`+p.category+`/`+p.id} className="archivePostReadMore">Read More</Link>
                    </div>
                    </div>
                </div>
                        );
                    })
                }
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
                {
                    recent.map((r=>{
                        return(
                        <div className="sidebar-widget">
                            <h3>Recent post</h3>
                            <div className="popularPostsWidget">    
                            <div className="popularPostsWidgetItem">
                                <Link to={`/react-api/`+r.category+`/`+r.id} className="popularPostsItemImg"><img src={`https://webeetec.com/itsharks24/blog/admin/`+r.image} alt="Francoise img" /></Link>
                                <time dateTime="2015-05-15">{r.date}</time>
                                <h4><Link to={`/react-api/`+r.category+`/`+r.id}>{r.title}</Link></h4>
                            </div>
                            </div>
                        </div>
                        );
                    }))
                }
                </div>
            </div>
            <div className="clear" />
            </section>

        </div>
    );
}

export default Category;
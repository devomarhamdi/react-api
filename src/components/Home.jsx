import {Link} from 'react-router-dom';
import {useEffect , useState} from 'react';
function Home() {

    const[posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getposts.php')
        .then(res => res.json())
        .then(r => {
            setPosts(r);
        })
    },[])

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
        <section className="container mt-5">
            <div className="wrapper clear">
                <div className="clear" />
                <div className="contentLeft">
                {
                    posts.map((post)=>{
                        return(
                        <div className="blogPostListWrap">
                            <div className="blogPostListItem clear">
                            <Link to={`/react-api/`+post.category+`/`+post.id} className="blogPostListImg">
                                <img src={`https://webeetec.com/itsharks24/blog/admin/`+post.image} alt="Francoise img" />
                            </Link>
                            <div className="blogPostListText">
                                <div className="blogPostListTime">{post.date}</div>
                                <h3><Link to={`/react-api/`+post.category+`/`+post.id}>{post.title}</Link></h3>
                                <p>{post.description}</p>
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

export default Home;
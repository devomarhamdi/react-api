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
                            <Link to={'/single/'+post.id} className="blogPostListImg">
                                <img src={`https://webeetec.com/itsharks24/blog/admin/`+post.image} alt="Francoise img" />
                            </Link>
                            <div className="blogPostListText">
                                <div className="blogPostListTime">{post.date}</div>
                                <h3><Link to={'/single/'+post.id}>{post.title}</Link></h3>
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

export default Home;
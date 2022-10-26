import {Link,useParams} from 'react-router-dom';
import {useEffect , useState} from 'react';


function Single() {
    
    var myparameters = useParams();
    var id = myparameters.id;
    var category = myparameters.category;
    
    const[posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/singlepost.php?id=' + id)
        .then(res => res.json())
        .then(r => {
            setPosts(r);
        })
    },[id])

    const[recent,setRecent] = useState([]);
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getrecentpost.php')
        .then(res => res.json())
        .then(r => {
            setRecent(r);
        })
    },[])

    const[related,setRelated] = useState([]);
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getrelated.php?category='+category+'&id='+id)
        .then(res => res.json())
        .then(r => {
            setRelated(r);
        })
    },[category,id])
    return ( 
        <div className="single-post">
            <section className="container">
            <div className="wrapper clear">
                            {
                                posts.map((p)=>{
                                    return(
                                        <div className="contentLeft">
                                            <div className="singlePostMeta">
                                                <div className="singlePostTime">{p.date}</div>
                                                    <h1>{p.title}</h1>
                                                    <Link to={'/'+p.category} className="singlePostCategory">{p.category}</Link>
                                            </div>
                                            <div className="singlePostWrap">
                                                <div className="singlePostImg">
                                                <img src={`https://webeetec.com/itsharks24/blog/admin/`+p.image} alt="Francoise img" />
                                                </div>
                                                <p>{p.description}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        
                <div className="sidebarRight">
                <div className="sidebar-widget">
                    <h3>About us</h3>
                    <div className="aboutMeWidget">
                    <img src="../images/ourlogo.png" alt="Francoise img" />
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
                            </div>
                        </div>
                {
                    recent.map((r=>{
                        return(
                            <div className="popularPostsWidgetItem">
                                <Link to={`/`+r.category+`/`+r.id} className="popularPostsItemImg"><img src={`https://webeetec.com/itsharks24/blog/admin/`+r.image} alt="Francoise img" /></Link>
                                <time dateTime="2015-05-15">{r.date}</time>
                                <h4><Link to={`/`+r.category+`/`+r.id}>{r.title}</Link></h4>
                            </div>
                        );
                    }))
                }
                        <div className="sidebar-widget">
                            <div className="popularPostsWidget">    
                    <h3>Related Posts</h3>
                    </div>
                </div>
                {
                    related.map((r=>{
                        return(
                            <div className="popularPostsWidgetItem">
                                <Link to={`/`+r.category+`/`+r.id} className="popularPostsItemImg"><img src={`https://webeetec.com/itsharks24/blog/admin/`+r.image} alt="Francoise img" /></Link>
                                <time dateTime="2015-05-15">{r.date}</time>
                                <h4><Link to={`/`+r.category+`/`+r.id}>{r.title}</Link></h4>
                            </div>
                        );
                    }))
                }
                </div>
            </div>
                <div className="clear"></div>
            </section>
        </div>
    );
}

export default Single;
import {Link,useParams} from 'react-router-dom';
import {useEffect , useState} from 'react';


function Single() {
    
    var myparameters = useParams();
    var id = myparameters.id;
    const[posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/singlepost.php?id=' + id)
        .then(res => res.json())
        .then(r => {
            setPosts(r);
        })
    },[id])
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
                    <h3>Recent post</h3>
                    <div className="popularPostsWidget">
                    <div className="popularPostsWidgetItem">
                        <a href="#" className="popularPostsItemImg"><img src="../images/content/popularPostImg.jpg" alt="Francoise img" /></a>
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

export default Single;
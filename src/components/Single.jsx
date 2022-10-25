function Single() {
    return ( 
        <>
            <section className="container">
            <div className="wrapper clear">
                <div className="contentLeft">
                <div className="singlePostMeta">
                    <div className="singlePostTime">15.05.2015</div>
                    <h1>CHOCOLATE-COVERED ESPRESSO BEAN BROWNIES</h1>
                    <a href="#" className="singlePostCategory">Lifestyle</a>
                </div>
                <div className="singlePostWrap">
                    <div className="singlePostImg">
                    <img src="images/content/single.jpg" alt="Francoise img" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, <a href="#">big group of colleagues</a> consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
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
        </>
    );
}

export default Single;
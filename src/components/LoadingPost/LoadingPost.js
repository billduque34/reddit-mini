import './LoadingPost.css';

export function LoadingPost() {
    return(<div className="LoadingPost">
            <div className="react-section">
            <p className="arrow">&#x21e7;</p>
                <div className="react-loading">
                    <div className="react-loading-bar">
                    </div>
                </div>
                <p className="arrow">&#x21e9;</p>
            </div>
            <div className="post-section">
                <div className="title-loading">
                    <div className="title-loading-bar">
                    </div>
                </div>
                <div className="image-post">
                    <div className="image-loading">
                    </div>
                </div>
                <hr/>
                <div className="post-footer">
                    <div className="footer-loading">
                        <div className="footer-loading-bar">
                        </div>
                    </div>
                </div>
            </div>
           </div>);
}
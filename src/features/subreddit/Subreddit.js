import './Subreddit.css';

export function Subreddit(props) {
    const handleClick = () => {
        props.setSubreddit(props.url);
        props.setSearch('');
    }

    return (<div className="Subreddit">
                <img src={props.icon} alt="subreddit"/>
                <p onClick={handleClick}>{props.title}</p>
            </div>);
}
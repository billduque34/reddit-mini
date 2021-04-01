import { SubredditList } from '../SubredditList/SubredditList';
import './SubRedditSection.css';

export function SubRedditSection(props) {
    return (<div className="SubRedditSection"  id="subreddits">
                <h2>Subreddits</h2>
                <hr/>
                <SubredditList setSubreddit={props.setSubreddit} setSearch={props.setSearch}/>
            </div>);
} 
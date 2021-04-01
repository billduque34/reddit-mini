import './SubredditList.css';
import { Subreddit } from "../../features/subreddit/Subreddit";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits } from '../../features/subreddits/subredditsSlice';
import { fetchSubreddits } from '../../features/subreddits/subredditsSlice'
import { SubredditListLoading } from '../LoadingSubreddit/SubredditListLoading';

export function SubredditList(props) {
    const dispatch = useDispatch();
    const subredditsList = useSelector(selectSubreddits);
    const isLoadingSubreddit = useSelector(state => state.subreddits.isLoadingSubreddits);
    useEffect(() =>{
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (<div className="SubredditList">
                {isLoadingSubreddit ? <SubredditListLoading/> : subredditsList.map(subreddit => <Subreddit setSubreddit={props.setSubreddit} 
                                                                                                           url={subreddit.url} 
                                                                                                           title={subreddit.title} 
                                                                                                           icon={subreddit.icon_img}
                                                                                                           key={subreddit.id}
                                                                                                           setSearch={props.setSearch}/>)}
            </div>);
}
import './PostSection.css';
import { Post } from "../../features/post/Post";
import { useEffect } from 'react';
import { PostListLoading } from '../LoadingPost/PostListLoading';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../../features/post/postsSlice';
import { fetchPosts } from '../../features/post/postsSlice';

export function PostSection(props) {
    const dispatch = useDispatch();

    const posts = useSelector(selectPosts);
    const isLoading = useSelector(state => state.posts.isLoadingPosts);

    useEffect(() => {
        dispatch(fetchPosts(props.subreddit))
    }, [dispatch, props.subreddit]);

    return (<div className="PostSection" id="posts">
                {isLoading ? <PostListLoading/> : posts.filter(post => post.title.toUpperCase().includes(props.search.toUpperCase()))
                                                        .map(post => <Post title={post.title} 
                                                                          src={post.url} 
                                                                          author={post.author} 
                                                                          numComments={post.num_comments} 
                                                                          score={post.score} 
                                                                          created={post.created_utc} 
                                                                          permalink={post.permalink}
                                                                          key={post.id}
                                                                          media={post.is_video || post.domain === 'youtu.be' ? post.media : ''}
                                                                          selfText={post.selftext_html}/>)}
            </div>);
}
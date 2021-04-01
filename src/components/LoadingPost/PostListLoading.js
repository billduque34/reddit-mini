import { LoadingPost } from './LoadingPost';

export function PostListLoading() {
    return (<div className="PostListLoading">
                <LoadingPost/>
                <LoadingPost/>
                <LoadingPost/>
                <LoadingPost/>
                <LoadingPost/>
            </div>);
}
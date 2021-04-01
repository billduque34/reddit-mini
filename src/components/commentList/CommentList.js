import './CommentList.css';
import { useEffect, useState } from "react";
import { Comment } from "../../features/comment/Comment";
import { getComments } from "../../RedditAPI/Reddit";

export function CommentList(props) {
    const [comments, setComments] = useState([]);

    useEffect(() => getComments(props.permalink)
                    .then(response => {
                        setComments(response);
                    })
                    , [props.permalink]);

    return (<div className="CommentList">
                {comments.map(comment => <Comment author={comment.author} 
                                                  body={comment.body} 
                                                  created={comment.created_utc}
                                                  key={comment.id}/>)}
            </div>);
}
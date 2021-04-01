import { dateCalculator } from '../../utils/dateCalculator';
import './Comment.css';

export function Comment(props) {
    return (<div className="Comment">
                <div className="comment-header">
                    <div className="comment-owner">
                        <p>{props.author}</p>    
                    </div>
                    <p>{dateCalculator(props.created)}</p>
                </div>
                <p>{props.body}</p>
            </div>);
}
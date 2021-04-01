import { faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { CommentList } from '../../components/commentList/CommentList';
import { dateCalculator } from '../../utils/dateCalculator';
import './Post.css';

export function Post(props) {
    const [toggleComment, setToggleComment] = useState(false);
    const [color, setColor] = useState('');
    const [changeUp, setChangeUp] = useState('');
    const [changeDown, setChangeDown] = useState('');
    const [changeReactColor, setChangeReactColor] = useState('');

    const handleClick = () => {
        setToggleComment(!toggleComment);
        if(toggleComment !== true) {
            setColor({color: 'blue'});
        } else {
            setColor('');
        }
    };

    const clickArrow = (color) => {
        return () =>  {
            if(color === 'green' && changeReactColor !== 'green') {
                setChangeUp(color);
                setChangeDown('');
                setChangeReactColor(color);
            } else if(color === 'red' && changeReactColor !== 'red') {
                setChangeUp('');
                setChangeDown(color);
                setChangeReactColor(color);
            } else {
                setChangeUp('');
                setChangeDown('');
                setChangeReactColor('');
            }
        }
    }

    return(<div className="Post">
            <div className="react-section">
                <p className="arrow" style={{color: changeUp}} onClick={clickArrow('green')}>&#x21e7;</p>
                <p style={{color: changeReactColor}}>{props.score}</p>
                <p className="arrow" style={{color: changeDown}} onClick={clickArrow('red')}>&#x21e9;</p>
            </div>
            <div className="post-section">
                <p>{props.title}</p>
                <img src={props.src.includes('.jpg') || props.src.includes('.gif') ? props.src : 'https://us.123rf.com/450wm/barbulat/barbulat1809/barbulat180900094/109243289-stock-vector-no-image-available-sign.jpg?ver=6'} alt=""/>
                <hr/>
                <div className="post-footer">
                    <div className="post-owner">
                        <p>Posted by: <span>{props.author}</span></p>
                    </div>
                    <p>{dateCalculator(props.created)}</p>
                    <div className="post-comments" onClick={handleClick}>
                        <FontAwesomeIcon icon={faComments} style={color}/>
                        <p>{props.numComments}</p>
                    </div>
                </div>
                {toggleComment ? <CommentList permalink={props.permalink}/> : ''}
            </div>
           </div>);
}
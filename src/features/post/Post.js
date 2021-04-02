import { faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { CommentList } from '../../components/commentList/CommentList';
import { dateCalculator } from '../../utils/dateCalculator';
import './Post.css';
import ReactHtmlParser from 'react-html-parser';

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

    function htmlDecode(input){
        let e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    const displayBody = () => {
        if(props.src.includes('.jpg') || props.src.includes('.gif')|| props.src.includes('.png')) {
          return <img src={props.src} alt=""/>;
        } else if(props.media.hasOwnProperty('reddit_video')) {
           return <video src={props.media.reddit_video.fallback_url} controls></video>
        } else if(props.selfText !== null) {
            return ReactHtmlParser(htmlDecode(props.selfText));
        } else if(props.media.type === 'youtube.com') {
            return ReactHtmlParser(htmlDecode(props.media.oembed.html));
        } else {
           return <a href={props.src}>{props.src}</a>;
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
                <div id="postBody">
                    {displayBody()}
                </div>
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
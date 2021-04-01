import './mobileNavButton.css';
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export function MobileNavButton() {
    const [active, setActive] = useState('#posts');
    const handleClick = () => {
        if(active === '#subreddits') {
            setActive('#posts');
        } else {
            setActive('#subreddits');
        }
    }

    return (<div className="MobileNavButton">
                <button>
                    <a href={active} onClick={handleClick}>
                        {active === '#posts' ? <FontAwesomeIcon icon={faRedditAlien}/> : <FontAwesomeIcon icon={faArrowUp}/>}
                    </a>
                </button>
            </div>);
}
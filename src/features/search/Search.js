import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './Search.css';


export function Search(props) {
    const [inputSearch, setInputSearch] = useState('');
    
    const handleChange = e => {
        setInputSearch(e.target.value);
    }

    const handleClick = () => {
        props.setSearch(inputSearch);
        setInputSearch('');
    }

    return (<div className="Search" id={props.id}>
                <input type="text" placeholder="Search" onChange={handleChange} value={inputSearch}/>
                <button onClick={handleClick}><FontAwesomeIcon icon={faSearch}/></button>
            </div>);
}
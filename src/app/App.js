import { faRedditSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { Search } from '../features/search/Search';
import { PostSection } from '../components/PostSection/PostSection';
import { SubRedditSection } from '../components/SubRedditSection/SubRedditSection';
import { useState } from 'react';
import { MobileNavButton } from '../components/mobileNavButton/MobileNavButton';

function App() {
  const [search, setSearch] = useState('');
  const [subreddit,setSubreddit] = useState('/r/Home');

  return (
    <div className="App">
      <header>
        <div className="logo">
          <FontAwesomeIcon icon={faRedditSquare}/>
          <p>Reddit<sup> mini</sup></p>
        </div>
        <Search setSearch={setSearch} id={'wide-screen'}/>
      </header>
      <main>
        <PostSection search={search} subreddit={subreddit}/>
        <SubRedditSection setSubreddit={setSubreddit} setSearch={setSearch}/>
        <MobileNavButton/>
      </main>
    </div>
  );
}

export default App;

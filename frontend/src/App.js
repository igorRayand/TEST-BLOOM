import { useState } from 'react';
import { Tweet } from 'react-twitter-widgets'
import axios from 'axios';
import './App.css';

function App() {

  const [tweets, setTweets] = useState([]);
  const [search, setSearch] = useState();

  const findTweets = () => {
    axios.get('/search?q=' + search).then((res) => {
      setTweets(res.data);
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className="App">
      <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
      <button onClick={findTweets}>Recherche</button>
      {tweets?.map(tweet => (
        <Tweet key={tweet.id} tweetId={tweet.id} />
      ))}
    </div>
  );
}

export default App;

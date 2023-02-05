import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import ShowTweets from './components/ShowTweets'

const App = () => {

  const [tweets, setTweets] = useState([]);
  
  useEffect(() => {
    console.log(tweets);
  }, [tweets])

  return (
    <>
      <SearchBar tweets={tweets}  setTweets={setTweets} />
      <ShowTweets tweets={tweets} />
    </>
  )
}

export default App

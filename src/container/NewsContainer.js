import React, { useEffect, useState } from 'react';
import { getNewsData } from '../services';
import News from '../components/News';

const NewsContainer = () => {
  const initialVotes = localStorage.getItem('votes') ? JSON.parse(localStorage.getItem('votes')) : {}
  const [news, setNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [vote, setVoteCount] = useState(initialVotes);
  const onHide = id => {
    const updatedHits = news.filter(item => item.objectID !== id);
    setNews(updatedHits);
  }
  const setVotes = (id, count = 0) => {
    const data = {};
    data[id] = count + 1;
    setVoteCount({...vote, ...data});
  }
  const onPaginationClick = (pageNumber) => {
    window.location.hash = `#pg=${pageNumber}`;
    setPageNumber(pageNumber)
  }
  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(vote));
  }, [vote]);
  useEffect(() => {
    let page = window.location.hash.substring(4) >= 0 ? window.location.hash.substring(4) : '';
    
    getNewsData(page).then(response => {
      setNews(response.data.hits)
    })
  }, [pageNumber])
  return (
    <>
      <h1>Hacker news</h1>
      <div className="table">
      <div className="table-header">
          <span className="col-xs-2">Comments</span>
          <span className="col-xs-2"> Vote Count</span>
          <span className="col-xs-2"> Upvote</span>
          <span className="col-xs-6">News Details</span>
        </div>
        {news.map(item => {
          item[item.objectID] = vote[item.objectID]
          if(item.objectID === Object.keys(vote)[0]) {
            item[item.objectID] = vote[item.objectID]
          }
          return item && item.url && <News item={item} onHide={onHide} setVotes={setVotes} />
        })}
      </div>
      <div className="footer">
        <button className="prev-button" onClick={() => pageNumber !== 0 && onPaginationClick(pageNumber - 1)} >Previous</button>
        <button className="next-button" onClick={() => onPaginationClick(pageNumber + 1)}>| Next</button>
      </div>
    </>
    );
}

export default NewsContainer;

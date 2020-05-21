import React from 'react';
import { TimeStamp } from '../helpers/TimeStamp';

const News = ({ item, onHide, setVotes }) => {
    return item ?
        <>
            <div key={item.objectID} data-testid="table-row" className="table-row">
            <span className="col-xs-2">
              {item.num_comments}
            </span>
            <span className="col-xs-2">
              {item[item.objectID] ? item[item.objectID] : 0}
            </span>
            <span className="col-xs-2">
              <button onClick={() => setVotes(item.objectID, item[item.objectID])} className="upvote-button">&#8679;</button>
            </span>
            <span className="col-xs-6">
              <a data-testid="title" href={item.url}>{item.title} </a>by  
              <span className="author"> {item.author}</span> {TimeStamp(item.created_at)} ago
              <button
                onClick={() => onHide(item.objectID)}
                className="hide-button"
              >
                [ hide ]
              </button>
            </span>
          </div>
        </>
        : null
}

export default News;
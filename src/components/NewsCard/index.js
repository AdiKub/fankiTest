import React from 'react';

import './styles.scss';

const NewsCard = (props) => {
  const { news, isRead } = props

  return (
    <div className='f-news-wrapper f-flex-column'>
     <div className='f-news-img-wrapper'>
      <img 
        src={news.image} 
        alt='news' 
        className='f-image'
      />
     </div>
     <div className='f-news-content-wrapper f-flex-column'>
      <span className='f-sub-text f-top-text-space'>{news.date}</span>
      <span className='f-news-title f-top-text-space'>{news.title}</span>
      <span className='f-news-discription f-top-text-space'>{news.description}</span>
      <div>
        <div>

        </div>
        <div>
          
        </div>
      </div>
     </div>
    </div>
  )
}
export default NewsCard;
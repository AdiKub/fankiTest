import React, { useState } from 'react';

import './styles.scss';
import { hexToRGB } from '../../helpers/helpers.js'
import partypoper from '../../assets/styles/svg/partypoper.svg'
import smile from '../../assets/styles/svg/smile.svg'

const NewsCard = (props) => {
  const { news } = props
  const [isPicked, setPicked] = useState('picked')

  return (
    <div className='f-news-wrapper f-flex-column '>
      <div className='f-news-img-wrapper'>
        <img
          src={news.image}
          alt='news'
          className='f-image'
        />
      </div>
      <div className='f-news-content-wrapper f-flex-column'>
        <span className='f-sub-text f-margin-top'>{news.date}</span>
        <span className='f-news-title f-margin-top'>{news.title}</span>
        <div className='f-news-discription f-hide-text f-margin-top'>
          <span >{news.description}</span>
        </div>
        <div className='f-flex-row f-space-between f-margin-top'>
          <div className='f-flex-row '>
            {Object.keys(news.expressions).map((expression, index) => (
              <div
                key={expression + index}
                style={{
                  backgroundColor: isPicked === expression && hexToRGB('#FF4C00', 0.1),
                  border: isPicked === expression && '1px solid #FF4C00'
                }}
                onClick={() => setPicked(expression)}
                className='f-news-expression-wrapper f-margin-right f-flex-row '>
                <img
                  className='f-margin-right'
                  alt='partypoper'
                  src={partypoper}>
                </img>
                <span
                  style={{
                    color: isPicked === expression && '#FF4C00'
                  }}
                  className='f-sub-text '>
                  {news.expressions[expression]}
                </span>
              </div>
            ))}

            <div className='f-news-expression-wrapper f-margin-right f-flex-row'>
              <img
                alt='smile'
                src={smile}>
              </img>
            </div>
          </div>

          <div className='f-news-expression-wrapper f-margin-right f-flex-row'>
            <i
              className='f-margin-right'
              data-eva-fill="#616061"
              data-eva="message-circle-outline"
              data-eva-height="18"
              data-eva-width="18">
            </i>
            <span className='f-news-comment-text'>
              {`${news.comments} комментариев`}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewsCard;
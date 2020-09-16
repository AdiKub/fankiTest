import React from 'react';
import './styles.scss';

const BoxTitle = (props) => {
  const {title, count} = props

  return (
    <div className='employee-tag-date' >
    <span className='f-card-name'>
      {title}
    </span>
    <div
      style={{
        backgroundColor: count ? '#ff0000' : '#959595'
      }}      
      className='f-card-count'>
      {count}
    </div> 
  </div>
  )
}
export default BoxTitle;
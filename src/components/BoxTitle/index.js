import React from 'react';
import './styles.scss';

const BoxTitle = (props) => {
  const {title, count} = props

  return (
    <div className='employee-tag-date' >
    <span className='f-card-name'>
      {title}
    </span>
    {count && 
      <div className='f-card-count'>
        {count}
      </div>
    }
   
  </div>
  )
}
export default BoxTitle;
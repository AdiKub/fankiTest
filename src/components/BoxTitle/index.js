import React from 'react';
import './styles.scss';

const BoxTitle = (props) => {
  const {title, count} = props

  return (
    <div className='employee-tag-date' >
    <span className='tag-name'>
      {title}
    </span>
    <span className='tag-name '>
      {count}
    </span>
  </div>
  )
}
export default BoxTitle;
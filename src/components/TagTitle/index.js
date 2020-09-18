import React from 'react';
import './styles.scss';

const TagTitle = (props) => {
  const { name, date, isEnable } = props

  return (
    <div
      style={{
        backgroundColor: isEnable && '#ffffff',
        borderBottom: isEnable && 'none',
        color: isEnable && '#1d1c1d'
      }}
      className='f-link tag-title-box'>
      <span
        className='tag-title'>
        {name},
      </span>
      <span>
        {date}
      </span>
    </div>
  )
}
export default TagTitle;
import React from 'react';

import './styles.scss';
import { hexToRGB } from '../../helpers/helpers.js'

const DayOffType = (props) => {
  const {type, count, color, isEnable} = props

  return (
    <div
      style={{
        backgroundColor: isEnable && hexToRGB(color, 0.2),
      }} 
      className='employee-type-box' >
      <div className='employee-type'>
        <div
          style={{ backgroundColor: color}}
          className='employee-type-line'
        />
        <span className='f-text-bold'>
          {type}
        </span>
      </div>
    <span className='f-sub-text'>
      {count ? count + ' сотрудников': 'нет'}
    </span>
  </div>
  )
}
export default DayOffType;
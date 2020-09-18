import React from 'react';

import './styles.scss';
import { hexToRGB } from '../../helpers/helpers.js'
import EmployeeAvatar from '../EmployeeAvatar'

const EmployInfo = (props) => {
  const { color, name, img, spec, date } = props
  const logoSize = '30px'
  return (
    <div className='f-flex-column f-link employee-user-wrapper' >
      <div className='f-flex-row employee-user'>
        <EmployeeAvatar src={img} size={logoSize} />
        <div className='f-flex-column f-name-start-box'>
          <span className='f-text-bold'>{name}</span>
          <span className='f-sub-text'>{spec}</span>
        </div>
      </div>
      <div
        style={{ backgroundColor: hexToRGB(color, 0.1) }}
        className='employee-dof-date-wrapper '
      >
        <span
          style={{ color: color }}
          className='employee-dof-date'
        >
          {date}
        </span>
      </div>

    </div>
  )
}
export default EmployInfo;
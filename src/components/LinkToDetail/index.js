import React, { useEffect } from 'react';
import './styles.scss';
import * as eva from 'eva-icons';

const LinkToDetail = (props) => {
  const {title} = props

  useEffect(() => {
    eva.replace()
  })
  return (
    <div className='employee-tag-date f-white-backgroud' >
    <span
      className='f-card-name f-card-red'>
      {title}
    </span>

      <div className=''>
        <i
          data-eva-fill="#FF4C00"
          data-eva="arrow-forward-outline"
          data-eva-height="20"
          data-eva-width="20">
        </i>
      </div>
  </div>
  )
}
export default LinkToDetail;
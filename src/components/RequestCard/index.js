import React, { useState } from 'react';

import './styles.scss';
import BoxTitle from '../BoxTitle'
import LinkToDetail from '../LinkToDetail'
import ProposalPoints from '../ProposalPoints'

const RequestCard = (props) => {
  const { title, count } = props
  const [number, setNumber] = useState(1)

  return (
    <div className='f-card-wrapper' >
      <BoxTitle
        title={title}
        count={count}
      />
      <div className='f-white-backgroud f-notif-content'>
        <div className='f-flex-row f-notif-content-box'>
          <div className='employee-content-wrapper-arrow'>
            <i
              data-eva-fill="#959595"
              data-eva="chevron-left-outline"
              data-eva-height="20"
              data-eva-width="20">
            </i>
          </div>
          <div>
            <div className='f-flex-row f-notif-text-wrapper'>
              <span className='f-text '>У вас</span>
              <p className='f-notif-text'>
                {count} несогласованных запроса
              </p>
            </div>
            <div>
              <span className='f-text f-right-text-space'>от сотрудников:</span>
              <span className='f-text-bold f-right-text-space'>Петров Алексей</span>
              <span className='f-text-bold f-right-text-space'>и</span>
              <span className='f-text-bold f-right-text-space'>Петров Алексей</span>
            </div>
          </div>
          <div className='employee-content-wrapper-arrow'>
            <i
              data-eva-fill="#959595"
              data-eva="chevron-right-outline"
              data-eva-height="20"
              data-eva-width="20">
            </i>
          </div>
        </div>
        <ProposalPoints
          number={number}
          setNumber={setNumber}
          count={count}
        />
      </div>
      <LinkToDetail title={title} />
    </div>
  )
}
export default RequestCard;
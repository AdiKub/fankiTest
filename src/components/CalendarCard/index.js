import React, { useState } from 'react';

import './styles.scss';
import BoxTitle from '../BoxTitle'
import LinkToDetail from '../LinkToDetail'
import ProposalPoints from '../ProposalPoints'

const CalendarCard = (props) => {
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
            <div className='f-flex-column f-notif-text-wrapper f-notif-calendar-margin'>
              <div className='f-notif-calendar-logo f-flex-column'>
                <div className='f-notif-calendar-logo-day f-flex-column'>
                  АВГ
                </div>  
                <span className='f-notif-calendar-logo-date'>20</span>
              </div>
              <span className='f-sub-text'> 10:00 - 11:00 | Групповое событие </span> 
              
            </div>
            <div>
              <span className='f-text f-right-text-space'>презентация мобильной системы</span>
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
export default CalendarCard;
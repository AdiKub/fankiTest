import React from 'react';

import './styles.scss';
import EmployeeAvatar from '../EmployeeAvatar'

const EventCard = (props) => {
  const { event } = props

  const size = '36px'
  return (
    <div
      className={
        event.isRead ?
          'f-event-wrapper f-link f-flex-row f-event-yellow-background' :
          'f-event-wrapper f-link f-flex-row'
      }>
      <EmployeeAvatar
        src={event.avatar}
        size={size}
      />
      <div className='f-flex-column f-name-start-box'>

        <div className='f-flex-row'>
          <h4 className='f-text-bold f-right-text-space'>
            {event.user}
          </h4>
          <span className='f-sub-text'>
            {event.date}
          </span>
        </div>

        <div
          className={
            event.isRead ?
              'event-text-wrapper f-text f-event-text-yellow-background' :
              'event-text-wrapper f-text'
          }>
          {event.text}
        </div>
      </div>
    </div>
  )
}
export default EventCard;
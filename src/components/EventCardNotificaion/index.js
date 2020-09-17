import React from 'react';

import './styles.scss';
import { getDaysName } from '../../helpers/helpers.js'

const EventCardNotificaion = (props) => {
  const { date, isRead, color } = props

  return (
    <div
      style={{
        border: `1px solid ${color}`
      }} 
      className='f-event-card-notification'> 
      {getDaysName(date, isRead)}
    </div>
  )
}
export default EventCardNotificaion;
import React from 'react';

import './styles.scss';

const NotificationCard = (props) => {
  const { notification } = props

  return (
    <div className='f-flex-row f-notif-content-box' >
      <div className='f-flex-row f-name-start-box '>
        <img
          src={notification.avatar}
          alt='avatar'
        >
        </img>
        <div>
          <div className='f-right-text-space f-link f-flex-column f-name-start-box'>
            <div>
              <span className='f-right-text-space f-text-bold'>{notification.user}</span>
              <span className='f-user-spec'>
                {notification.date}
              </span>
            </div>
            <div
              className="f-notification-title-wrapper  "
              style={{ backgroundColor: '#2f81ed2e' }}
            >
              <span className="f-notification-title" >
                {notification.title}
              </span>
            </div>
            <span className="f-notification-description f-margin-top" >
              {notification.description}
            </span>
            <span className="f-notification-option f-margin-top " >
              {notification.option}
            </span>
          </div>

        </div>
      </div>


    </div>
  )
}
export default NotificationCard;
import React from 'react';

import './styles.scss';
import delphin from '../../assets/styles/svg/delphin.svg'
import BoxTitle from '../BoxTitle'
import LinkToDetail from '../LinkToDetail'
import NotificationCard from '../NotificationCard'

const NotificationsCard = (props) => {
  const { title, count } = props
  const notifications = [
    {
      avatar: delphin,
      user: 'Владимиров Владимир',
      date: '9:22',
      title: 'НАЗНАЧАЕТ ВАМ ЗАДАЧУ',
      description: `Подготовить обновлённую презентацию разработанного продукта`,
      option: ''
    },{
      avatar: delphin,
      user: 'Владимиров Владимир',
      date: '13:12',
      title: 'СОЗДАЁТ СОБЫТИЕ',
      description: `Презентация IT-отдела, Улучшение мобильной платёжной системы.`,
      option: 'Групповое событие'
    },
  ]
  return (
    <div className='f-card-wrapper ' >
      <BoxTitle
        title={title}
        count={count}
      />
      <div className='f-white-backgroud f-notif-wrapper'>
         { notifications.map((notification, index)=>(
           <div
            key={notification.user + index} 
            className='f-news-wrapper'
          >
            <NotificationCard notification={notification} />
           </div>
         )) } 
      </div>
      <LinkToDetail title={title} />
    </div>
  )
}
export default NotificationsCard;
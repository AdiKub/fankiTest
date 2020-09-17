import React from 'react';

import './styles.scss';

import BoxTitle from '../BoxTitle'
import LinkToDetail from '../LinkToDetail'
import EventCard from '../EventCard'
import EventCardNotificaion from '../EventCardNotificaion'
import NewsCard from '../NewsCard'
import delphin from '../../assets/styles/svg/delphin.svg'
import updateImg from '../../assets/styles/svg/updateImg.svg'

const EventsCard = (props) => {
  const { title, count } = props

  const getColor= ( isRead ) => isRead ? '#FF4C00' : '#dddddd'

  const events = [
    { 
      avatar: delphin,
      isRead: true,
      date: 'Сегодня, 10:50',
      user: 'Калинина Оксана',
      text: 'Текст объявления, который написан от лица сотрудника.'
    },
    {
      avatar: delphin,
      isRead: false,
      date: 'Сегодня, 9:20',
      user: 'Гагарина Ольга',
      text: 'Текст объявления, который написан от лица сотрудника.'
    }
  ]

  const fankiNews = [
    {
      image: updateImg,
      isRead: true,
      date: '30 апреля 2020, 12:00',
      title: 'Здесь будет находится длинный очень длинный заголовокопубликованной новости в водопаде событий',
      description: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности позволяет оценить значение позиций, занимаемых...',
      comments: 18,
      expressions: {
        cool: 3,
        partypoper: 5
      }
    }
  ]

  return (
    <div className='f-card-wrapper' >
      <BoxTitle
        title={title}
        count={count}
      />
      <div className='f-white-backgroud  f-event-width'>
        <div className='f-flex-column f-events-margin f-notif-content-box'>
          {events && events.map((event, index) => (
            <div
              key={event.date + index}
              style={{
                borderTop: `1px solid ${getColor(event.isRead)}`
              }}
              className='f-event-card-wrapper'>
              {index === 0 && 
                <EventCardNotificaion 
                  color={getColor(event.isRead)}
                  isRead={!event.isRead}
                  date={event.date}
                />
              }
              <EventCard
                event = {event}
              />
            </div>
          ))}
          {fankiNews && fankiNews.map((news, index) => (
            <div
              key={news.date + index}
              style={{
                borderTop: `1px solid ${getColor(!news.isRead)}`
              }}
              className='f-event-card-wrapper'>
              {index === 0 &&
                <EventCardNotificaion
                  color={getColor(!news.isRead)}
                  isRead={!news.isRead}
                  date={news.date}
                />
              }
              <NewsCard 
                news={news}
              />
            </div>
          ))}
        </div>
      </div>
      <LinkToDetail title={''} />
    </div>
  )
}
export default EventsCard;
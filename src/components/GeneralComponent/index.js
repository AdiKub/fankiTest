import React from 'react';

import './styles.scss';
import PageHeader from '../PageHeader'
import Navbar from '../Navbar'
import EmployeeDayOff from '../EmployeeDayOff'
import RequestCard from '../RequestCard'
import CalendarCard from '../CalendarCard'
import KnowledgeBaseCard from '../KnowledgeBaseCard'
import EventsCard from '../EventsCard'
import NotificationsCard from '../NotificationsCard'

const GeneralComponent = () => {

  return (
    <div className='GeneralComponent'>
      <PageHeader />
      <div className='main-wrapper'>
        <Navbar />
        <div className='content-wrapper content-wrapper-position '>
          <EmployeeDayOff />
          <div className='f-flex-row f-space-between'>
            <RequestCard
              title='запросы'
              count={3}
            />
            <CalendarCard
              title='календарь'
              count={2}
            />
            <KnowledgeBaseCard
              title='база знаний'
              count={0}
            />
          </div>
          <div className='f-flex-row f-space-between f-row-start'>
            <EventsCard
              title='Водопад событий'
              count={2}
            />
            <NotificationsCard
              title='уведомления'
              count={2}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default GeneralComponent;
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';

import PageHeader from '../PageHeader'
import Navbar from '../Navbar'
import EmployeeDayOff from '../EmployeeDayOff'
import RequestCard from '../RequestCard'

const FirstComponent = () => {
  // const dispatch = useDispatch()
  // const showMe = useSelector(store=>store.show_me)
  // const mode = useSelector(state => state.modeEdit)

  return (
    <div className='firstComponent'>
      
      <PageHeader/>
      <div className='main-wrapper'>
        <Navbar />
        <div className='content-wrapper'>
          <EmployeeDayOff />
          <div className='f-flex-row'>
            <RequestCard
              title ='запросы' 
              count = '3'
            />
          </div>
        </div>
      </div>
    
    </div>
  )
}
export default FirstComponent;
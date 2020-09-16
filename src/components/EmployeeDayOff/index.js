import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as eva from 'eva-icons';

import './styles.scss';
import BoxTitle from '../BoxTitle'
import TagTitle from '../TagTitle'

const EmployeeDayOff = () => {

  const [isEnable, setEnable] = useState('28 авг')

  useEffect(() => {
    eva.replace()
  })

  return (
    <div className='employee'>
      <BoxTitle
        title='отсутствующие сотрудники'
        count=''
      />
      <div className='employee-tag'>
        <div onClick={()=>setEnable('28 авг')}>
          <TagTitle 
            isEnable={isEnable === '28 авг'} 
            name='сегодня' 
            date='28 авг'
          />
        </div> 
        <div onClick={()=>setEnable('29 авг')}>
          <TagTitle 
            isEnable={isEnable === '29 авг'} 
            name='завтра' 
            date='29 авг'
          />
        </div> 
        <div onClick={()=>setEnable('неделя')}>
          <TagTitle 
            isEnable={isEnable === 'неделя'} 
            name='неделя' 
            date=''
          />
        </div> 
      </div>
      <div className='employee-box'>
        
      </div>
    </div> 
  )
}
export default EmployeeDayOff;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as eva from 'eva-icons';

import './styles.scss';
import BoxTitle from '../BoxTitle'
import TagTitle from '../TagTitle'
import DayOffType from '../DayOffType'

const EmployeeDayOff = () => {

  const [date, setDate] = useState('28 авг')
  const [type, setType] = useState('all')

  const dofTypes = {
    all: {
      type: 'все',
      color: '#00c564',
      count: 23
    },
    vacation: {
      type:  'в отпуске',
      color: '#4e45ec',
      count: 7
    },
    dayOff: {
      type: 'Отгул',
      color: '#F2994A',
      count: 10
    },
    illness: {
      type: 'Больничный',
      color: '#ff0000',
      count: 0
    },
  }

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
        <div onClick={()=>setDate('28 авг')}>
          <TagTitle 
            isEnable={date === '28 авг'} 
            name='сегодня' 
            date='28 авг'
          />
        </div> 
        <div onClick={()=>setDate('29 авг')}>
          <TagTitle 
            isEnable={date === '29 авг'} 
            name='завтра' 
            date='29 авг'
          />
        </div> 
        <div onClick={()=>setDate('неделя')}>
          <TagTitle 
            isEnable={date === 'неделя'} 
            name='неделя' 
            date=''
          />
        </div> 
      </div>
      <div className='employee-box'>
        <div className='employee-day-off-type'>
          {Object.keys(dofTypes).map((dofType)=>(
              <div
                key={dofType}
                onClick={()=> setType(dofType)}
              >
              <DayOffType
                isEnable={type === dofType}
                color={dofTypes[dofType].color}
                type={dofTypes[dofType].type}
                count={dofTypes[dofType].count}
              />
            </div>
          ))}
        </div>
      </div>
    </div> 
  )
}
export default EmployeeDayOff;

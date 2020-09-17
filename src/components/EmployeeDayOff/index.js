import React, { useEffect, useState } from 'react';
import * as eva from 'eva-icons';

import './styles.scss';
import delphin from '../../assets/styles/svg/delphin.svg'
import BoxTitle from '../BoxTitle'
import TagTitle from '../TagTitle'
import DayOffType from '../DayOffType'
import EmployInfo from '../EmployInfo'

const EmployeeDayOff = () => {

  const [date, setDate] = useState('28 авг')
  const [type, setType] = useState('vacation')

  const dofTypes = {
    all: {
      type: 'все',
      color: '#00c564',
      count: 56
    },
    vacation: {
      type:  'в отпуске',
      color: '#4e45ec',
      count: 7
    },
    dayOff: {
      type: 'Отгул',
      color: '#F2994A',
      count: 9
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
    <div className='f-card-wrapper'>
      <BoxTitle
        title='отсутствующие сотрудники'
        count={16}
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
        <div className='employee-content-wrapper'>
          <div className='employee-content-wrapper-arrow'>
            <i
              data-eva-fill="#959595"
              data-eva="chevron-left-outline"
              data-eva-height="20"
              data-eva-width="20">
            </i>
          </div>
          <div className='employee-content'>
            {
              dofTypes[type].count ?
              Array(dofTypes[type].count).fill().slice(0, 9).map((_, index)=>(
                <EmployInfo
                    key={index}
                    color={dofTypes[type].color}
                    name='Name Surname'
                    img={delphin}
                    spec='Employee-position' 
                    date='Dd Month yyyy - Dd Month yyyy'
                  />
              )):
              <div className='employee-empty'>
                <span className='f-sub-text'>
                  Сотрудников на больничном нет
                </span>
              </div>
            }
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
      </div>
    </div> 
  )
}
export default EmployeeDayOff;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import fankiIconSVG from '../../assets/styles/svg/fankiIcon.svg'
import * as eva from 'eva-icons';

const Navbar = () => {

  const companyName = [
    {
      name: 'Главная',
      icon: fankiIconSVG,
      link: '/'
    },
    {
      name: 'Запросы',
      icon: 'flash-outline',
      link: '/'
    },
    {
      name: 'Календарь',
      icon: 'calendar-outline',
      link: '/'
    },
    {
      name: 'База знаний',
      icon: 'book-outline',
      link: '/'
    },
    {
      name: 'Новости',
      icon: 'book-open-outline',
      link: '/'
    },
    {
      name: 'Задачи',
      icon: 'checkmark-circle-outline',
      link: '/'
    },
    {
      name: 'Чаты',
      icon: 'message-circle-outline',
      link: '/'
    },
  ]
  const admin = [
    {
      name: 'Статистика компании',
      icon: 'trending-up-outline',
      link: '/'
    },
    {
      name: 'Структура компании',
      icon: 'copy-outline',
      link: '/'
    },
    {
      name: 'Сотрудники',
      icon: 'people-outline',
      link: '/'
    },
    {
      name: 'База знаний',
      icon: 'book-outline',
      link: '/'
    },
    {
      name: 'Новости',
      icon: 'book-open-outline',
      link: '/'
    },
    {
      name: 'Настройки',
      icon: 'settings-outline',
      link: '/'
    },
    {
      name: 'Служба поддержки',
      icon: 'layers-outline',
      link: '/'
    },
  ]


  const [collapsed, setCollapsed] = useState(false)
  const nameColor = '#959595'
  const arrowColor = '#1d1c1d'
  const nameSizes = {
    hight: '15px',
    width: '15px'
  }
  useEffect(() => {
    eva.replace()
  })

  return (
    <div className='container'>
      <div className='navbar'>

        <nav className="bs-dashboard-nav">
          <ul className="bs-dashboard-nav--list">

            <li className="menu-item bs-collapse">
              <div className="menu-item-wrapper" onClick={() => console.log('zxczxc')}>
                <span className="link-text">Company Name</span>
                  <i
                    className="menu-item-arrow"
                    data-eva-fill={arrowColor}
                    data-eva='arrow-ios-downward-outline'
                    data-eva-height={nameSizes.hight} 
                    data-eva-width={nameSizes.width} 
                  />
              </div>
              <div className="bs-collapse--content">
                <ul className="sub-menu-list">
                  {companyName.map((obj, index)=>(
                    <li
                      key={obj.name}
                      className="sub-menu-item"
                    >
                    {index === 0 ? 
                      <img
                        style={{
                          hight: nameSizes.hight,
                          width: nameSizes.width,
                        }}
              
                        alt='fanki' 
                        className="sub-menu-item--icon" 
                        src={obj.icon} 
                      /> : 
                      <i
                        className="sub-menu-item--icon"
                        data-eva-fill={nameColor}
                        data-eva={obj.icon}
                        data-eva-height={nameSizes.hight} 
                        data-eva-width={nameSizes.width} 
                      />
                    }
                    
                    <Link
                      className="sub-menu-item--link"
                      to={obj.link}

                  >{obj.name}</Link>
                  </li>
                  ))}
                  
                  
                </ul>
              </div>
            </li>

            <li className="menu-item bs-collapse">
              <div className="menu-item-wrapper" onClick={() => console.log('zxczxc')}>
                <span className="link-text">Администратор</span>
                <i
                  className="menu-item-arrow"
                  data-eva-fill={arrowColor}
                  data-eva='arrow-ios-downward-outline'
                  data-eva-height={nameSizes.hight} 
                  data-eva-width={nameSizes.width} 
                />
              </div>
              <div className="bs-collapse--content">
                <ul className="sub-menu-list">
                {admin.map((obj, index)=>(
                    <li
                      key={obj.name}
                      className="sub-menu-item"
                    >
                    <i
                      className="sub-menu-item--icon"
                      data-eva-fill={nameColor}
                      data-eva={obj.icon}
                      data-eva-height={nameSizes.hight} 
                      data-eva-width={nameSizes.width} 
                    />
                    <Link
                      className="sub-menu-item--link"
                      to={obj.link}

                  >{obj.name}</Link>
                  </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Navbar;

import React, { useEffect } from 'react';
import * as eva from 'eva-icons';

import './styles.scss';
import fankiIconSVG from '../../assets/styles/svg/fankiIcon.svg'

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
  const nameColor = '#959595'
  const arrowColor = '#1d1c1d'
  const nameSizes = {
    hight: '24px',
    width: '24px'
  }

  useEffect(() => {
    eva.replace()
  })

  return (
    <nav className="bs-dashboard-nav">
      <ul className="bs-dashboard-nav--list">
        <li className="menu-item bs-collapse">
          <div className="menu-item-wrapper" onClick={() => console.log('zxczxc')}>
            <span className="f-link link-text">Company Name</span>
            <i
              className="menu-item-arrow "
              data-eva-fill={arrowColor}
              data-eva='arrow-ios-downward-outline'
              data-eva-height={nameSizes.hight}
              data-eva-width={nameSizes.width}
            />
          </div>
          <div className="bs-collapse--content">
            <ul className="sub-menu-list">
              {companyName.map((obj, index) => (
                <div
                  className={index === 0 ?
                    "sub-menu-item-wrapper f-flex-row f-link f-nav-active" :
                    "sub-menu-item-wrapper f-flex-row f-link "
                  }
                  key={obj.name}
                >
                  <li className="sub-menu-item" >
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
                    <a
                      style={{
                        color: index === 0 ? '#ffffff' : '#1D1C1D'
                      }}
                      className="sub-menu-item-link"
                      href="/"

                    >{obj.name}
                    </a>
                  </li>
                  {index === 0 &&
                    <i
                      className="sub-menu-item--icon"
                      data-eva-fill={'#bbbbbb'}
                      data-eva={'question-mark-circle-outline'}
                      data-eva-height='18px'
                      data-eva-width='18px'
                    />
                  }
                </div>
              ))}
            </ul>
          </div>
        </li>

        <li className="menu-item bs-collapse">
          <div
            className=" f-link menu-item-wrapper"
            onClick={() => console.log('zxczxc')}>
            <span className="link-text f-link">Администратор</span>
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
              {admin.map((obj, index) => (
                <div
                  className="sub-menu-item-wrapper f-flex-row"
                  key={obj.name}
                >
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
                    <a
                      className="sub-menu-item-link"
                      href='/'
                    >{obj.name}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;

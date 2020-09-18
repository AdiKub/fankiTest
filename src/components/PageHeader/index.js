import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import fankiSVG from '../../assets/styles/svg/fanki.svg'
import * as eva from 'eva-icons';


const PageHeader = () => {
  useEffect(()=>{eva.replace()})
  
  return (
    <div className='page-header f-box-shadow '>
      <div className='container'>
        <div className='page-header-wrapper'>
          <div >
            <Link className="page-header-logo-wrapper" to='/'>
              <img 
                alt='logo' 
                className="page-header-logo__img" 
                src={fankiSVG} 
              />
              <h1
                className='page-header-logo__title'
              > Fanki </h1>
            </Link>
          </div>
          <div className='page-header-user-box'>
            <div className='page-header-user-box-notification'>
              <button className='user-box-notification__button'>
                <i 
                  data-eva-fill="#959595"
                  data-eva="bell-outline" 
                  data-eva-height="20" 
                  data-eva-width="20">
                </i>
                <span className='user-box-notification__button-text'>Сообщений нет</span> 
              </button>
            </div> 
            <div className='user-box-info f-link'>
              <div className='user-box-info-wrapper'>
                <h4 className='f-user-name'>Александров Александр</h4>
                <span className='f-user-spec'>Frontend Разработчик</span>
              </div>
              <div className='user-header-img-wrapper'>
              </div>
              <i 
                data-eva-fill="#1d1c1d"
                data-eva="chevron-down-outline" 
                data-eva-height="25" 
                data-eva-width="25">
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageHeader;

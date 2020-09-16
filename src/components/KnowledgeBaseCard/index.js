import React, { useState } from 'react';

import './styles.scss';
import books from '../../assets/styles/svg/books.svg'
import BoxTitle from '../BoxTitle'
import LinkToDetail from '../LinkToDetail'
import ProposalPoints from '../ProposalPoints'

const KnowledgeBaseCard = (props) => {
  const { title, count } = props
  const [number, setNumber] = useState(1)

  return (
    <div className='f-card-wrapper' >
      <BoxTitle
        title={title}
        count={count}
      />
      <div className='f-white-backgroud f-notif-content'>
        <div className='f-flex-row f-notif-content-box'>
          <div className='employee-content-wrapper-arrow'>
            <i
              data-eva-fill="#959595"
              data-eva="chevron-left-outline"
              data-eva-height="20"
              data-eva-width="20">
            </i>
          </div>
          <div className='f-flex-column'>
            <img alt='books' src={books}></img>
            <div>
              <span className='f-sub-text'>Новых публикаций нет</span>
            </div>
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
        <ProposalPoints
          number={number}
          setNumber={setNumber}
          count={count} 
        />
      </div>
      <LinkToDetail title={title} />
    </div>
  )
}
export default KnowledgeBaseCard;
import React from 'react';

import './styles.scss';

const ProposalPoints = (props) => {
  const { count, setNumber, number } = props

  return (

    <div className='f-proposal-point-wrapper'>
      {Array(count).fill().map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: index + 1 === number && '#FF4C00',
            marginRight: index + 1 !== Number(count) && '5px'
          }}
          onClick={() => setNumber(index + 1)}
          className='f-proposal-point f-link ' />
      ))}
    </div>

  )
}
export default ProposalPoints;
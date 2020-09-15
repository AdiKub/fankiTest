import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';

import PageHeader from '../PageHeader'
import Navbar from '../Navbar'

const FirstComponent = () => {
  // const dispatch = useDispatch()
  // const showMe = useSelector(store=>store.show_me)
  // const mode = useSelector(state => state.modeEdit)

  return (
    <div className='firstComponent'>
      
      <PageHeader/>
      <Navbar />
      <div>
        
      </div>
    
    </div>
  )
}
export default FirstComponent;
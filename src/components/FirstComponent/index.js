import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';

const FirstComponent = () => {
  // const dispatch = useDispatch()
  // const showMe = useSelector(store=>store.show_me)
  // const mode = useSelector(state => state.modeEdit)

  return (
    <div className='FirstComponent'>
      <Link to='/second'>
        <span>SecondComponent</span>
      </Link>
    </div>
  )
}
export default FirstComponent;
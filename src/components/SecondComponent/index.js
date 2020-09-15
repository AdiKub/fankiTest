import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const SecondComponent = () => {
  return (
    <div>
      <Link to='/'>
        <span>FirstComponent</span>
      </Link>
      
    </div>
  )
}
export default SecondComponent;
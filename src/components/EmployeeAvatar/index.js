import React from 'react';
import './styles.scss';

const EmployeeAvatar = (props) => {
  const {src, size} = props

  return (
   
      <div
        className='employee-avatar-wrapper'
        style={{
          height: size,
          width: size
        }}
      >
       <img
        className='employee-avatar'
        style={{
          height: size,
          width: size
        }} 
        alt='logo' 
        src={src}/>

      </div>
  
  )
}
export default EmployeeAvatar;
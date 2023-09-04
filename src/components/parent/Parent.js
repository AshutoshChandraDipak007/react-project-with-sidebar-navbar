import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../sidebar/SideBar';
import './parent.css';

function Parent({children}) {
  const flag=useSelector((state) => state.counter.isToggle);
  return (
    <>   
    <div className='sidebar'>      
       <SideBar />
    </div>
    <div className={`${flag?"nav-open":"nav-close"}`}>
        {children}
    </div>
    </>  
  )
}

export default Parent

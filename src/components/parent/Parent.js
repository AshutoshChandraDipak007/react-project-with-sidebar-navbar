import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../sidebar/SideBar';
import './parent.css';

function Parent({children}) {
  const flag=useSelector((state) => state.counter.isToggle);

  const cssStyle={
    margin:'60px 0px 0px 250px',
    top: 0, 
    position:'absolute',
    border:'15px solid rgb(236, 240, 240)',
  }

  return (
    <>   
    <div className='sidebar'>      
       <SideBar />
    </div>
    <div className={`${flag?"parent-component-hide":"parent-component"}`}>
        {children}
    </div>
    </>
  
  )
}

export default Parent

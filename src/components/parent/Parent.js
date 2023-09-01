import React from 'react'
import SideBar from '../sidebar/SideBar'

function Parent({children}) {
  return (
    <>   
    <div className='sidebar'>      
    <SideBar />
    </div>
      <div className='parent-component'>
        {children}
    </div>
    </>
  
  )
}

export default Parent

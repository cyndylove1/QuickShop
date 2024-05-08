import React from 'react'
import Main from '../Main/Main'
import SideBar from '../SideBar/SideBar'

const DashBoard = () => {
  return (
    <div>
       <div className="flex h-screen">
        <div className="w-17">
          <SideBar/>
          

        </div>
        <div className=' w-100 bg-grey'>
          <div>
            <Main/>

          </div>
          
          

        </div>

      </div>
      
      
    </div>
  )
}

export default DashBoard
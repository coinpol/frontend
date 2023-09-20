import React from 'react';

import Navbar from '../components/Navbar'
import DashBoard from '../components/DashBoard'
import { useSelector } from 'react-redux/es/hooks/useSelector'



function HomePage() {
  const isDarkMode = useSelector((state) => state.darkmode.darkmode)
  const style = isDarkMode? {backgroundColor:'#141414'}:{backgroundColor:'#f1f5f9'} 
  return (
   <div style={style}>
   <Navbar/>
   <DashBoard props={isDarkMode}/>
</div>
  )
}

export default HomePage
import React from 'react';

import Navbar from '../components/Navbar'
import Admins from '../components/Admins'
import { useSelector } from 'react-redux'

const Adminpage = () => {
    const isDarkMode = useSelector((state) => state.darkmode.darkmode)
  return (
   
    <div  style={isDarkMode? {backgroundColor:'#141414'}:{backgroundColor:'#f1f5f9'}  }>
        <Navbar/>
        <Admins mode={isDarkMode}/>
    </div>
  )
}

export default Adminpage
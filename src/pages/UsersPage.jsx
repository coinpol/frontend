import React from 'react';

import Navbar from '../components/Navbar'
import Users from '../components/Users'
import { useSelector } from 'react-redux'

const UsersPage = () => {
    const isDarkMode = useSelector((state) => state.darkmode.darkmode)
  return (
    <div style={isDarkMode? {backgroundColor:'#141414'}:{backgroundColor:'#f1f5f9'}  }>
        <Navbar/>
        <Users mode={isDarkMode}/>
    </div>
  )
}

export default UsersPage
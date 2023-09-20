import React from 'react';
import TableComponent from './Table'
import CardItem from './CardItem'
import { Box } from '@material-ui/core'

import { Typography } from '@mui/material';
const Admins = (props) => {
   const {mode}=props;
  return (
    <Box sx={{width:'auto'}}>
       <Box sx={{display:'flex',flexDirection:'row',gridRowGap:'3px',justifyContent:'space-between',padding:'20px 70px 20px 70px'}}>
         <CardItem />
         <CardItem />
         <CardItem />
       
         
      </Box>
      <Typography variant='h6'  sx={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative',top:"36px"}}>
        <span style={{fontWeight:'600', ...( mode ?  { color:'#ffff' } : { color:'black' } )}}>MANAGE ADMINS</span></Typography>
      <Box  sx={{padding:'70px'}}>
        <TableComponent  />
        </Box>
    </Box>
  )
}

export default Admins
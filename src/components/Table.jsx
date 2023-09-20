import React from 'react';

import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Button } from '@mui/material';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,Typography } from '@material-ui/core';
import { useState } from 'react';










const rows = [
"NAME","E-MAIL","ACTION","DETAILS"
 
];



export default function TableComponent(props) {


const[ data,setData] =useState([{
    id:1,
    name:"risham",
    email:"rishammmm@gmial.com"
    ,   isblocked: false, 
},{
    id:2,
    name:"sham",
    email:"rishammmmmmm@gmial.com"
    ,   isblocked: false, 
},{
    id:3,
    name:"iamkjljlkjj",
    email:"rishammmm@gmial.com"
   ,   isblocked: false,  
    
}])
const [open, setOpen] = useState(false);

  const handleBlock=(itemId)=>{
    setData((prevData) =>
    prevData.map((item) =>
      item.id === itemId
        ? { ...item, isblocked: !item.isblocked }
        : item
    ))
   setOpen(true);
 
  }






  const handleClose = () => {

    setOpen(false);

  };


  const isDarkMode = useSelector((state) => state.darkmode.darkmode)
 
  const style1={
    backgroundColor:'#232323',
    color:'#ffff !important',
    }
 
    const style2={
     backgroundColor:'#ffff',
     color:'black !important'
     }

     const bt1={
        
            backgroundColor: '#141414', // Change background color on hover
            color: 'white', // Change text color on hover
          
        '&:hover': {
            backgroundColor: 'darkcyan', // Change background color on hover
            color: 'white', // Change text color on hover
          }

        
      
     }


     const bt2={
        
        backgroundColor: '#ffff', // Change background color on hover
        color: 'black', // Change text color on hover
      
    '&:hover': {
        backgroundColor: 'darkcyan', // Change background color on hover
        color: 'black', // Change text color on hover
      }
    }


  return (

    <Box  sx={{display:"flex",flexDirection:'column',alignItems:'center',...(isDarkMode?style1:style2)}}>
      
      

    <Paper sx={{ width: '100%' , ...(isDarkMode?style1:style2)}}>
       
        <Box>
     <Box sx={{display:'flex',}}>
        
        {rows.map((item)=><Box sx={{width:'170px',height:'70px',display:'flex',justifyContent:'center',alignItems:'center',border:'1px',borderStyle:'solid'}}>
    <Typography>{item}</Typography>
    
</Box>)}


     </Box>
     <Box sx={{justifyContent:'space-between'}}>
        
        {data.map((item)=><Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <Box sx={{width:'4px',height:'70px',display:'flex',    paddingLeft: '56px',position:"relative",alignItems:'center'}}><Typography>{item.name}</Typography></Box>

    <Box sx={{width:'100px',height:'70px',display:'flex',position:"relative",alignItems:'center'}}><Typography>{item.email}</Typography></Box>
   <Box sx={{width:'100px',height:"70px",display:'flex',alignItems:'center',justifyContent:'center'}}><Button  key={item.id}  sx={{...(isDarkMode?bt2:bt1),height:'30px'} } onClick={()=>handleBlock(item.id)}>{item.isblocked===false?'Block':'UnBlock'}</Button>
   
   <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Alert</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
   
   </Box>
   <Box sx={{width:'100px',height:"70px",display:'flex',alignItems:'center',justifyContent:'center',position:"relative",right:'38px'}}><Button sx={{width:"10px",...(isDarkMode?bt2:bt1),height:'30px'}}>Details</Button></Box>
    
</Box>)}


     </Box>
     </Box>

    </Paper></Box>
  );


}

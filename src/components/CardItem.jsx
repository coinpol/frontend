// import node module libraries
import React from 'react';

import {Card} from 'react-bootstrap';
import Typography from '@mui/material/Typography';
// import required data files


const CardItem = () => {
    return (
        <div>
 <Card style={{ width: '13rem',height:'10rem',position: 'relative',justifyContent: 'center',display: 'flex',borderRadius: '10px',backgroundColor:'darkcyan'}}>
      <Card.Body>
        <Card.Title style={{  justifyContent: 'center',display: 'flex',top:'10px',position:'relative'}}>
            
            <Typography  variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block', fontWeight: 600 , } }}>
                New Users  
            </Typography>
          
            
            </Card.Title>
            <Card.Title   style={{display:'flex', justifyContent:'center', alignItems:'center',  width:'10rem',height: '8rem', }}>
            <Typography  variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block', fontWeight: 600  } }}>
                1302  
            </Typography>
            </Card.Title>
      
      </Card.Body>
    </Card>

        </div>
    )
}

export default CardItem
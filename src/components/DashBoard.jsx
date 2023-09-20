import React from 'react';

import { Box } from '@material-ui/core';
import CardItem from './CardItem';
import ChartS from './ChartS';




const DashBoard = (props) => {
  

  return (
    <Box>

<Box sx={{display:'flex',flexDirection:'row',gridRowGap:'3px',justifyContent:'space-between',padding:'20px 70px 20px 70px'}}>
         <CardItem />
         <CardItem />
         <CardItem />
         <CardItem />
         <CardItem />
         
      </Box>
   
   
<Box  sx={{display:'flex',flexDirection:'row',flexWrap:'wrap',gridRowGap:'20px',justifyContent:'space-between',padding:'10px 70px 10px 70px'}}  >
<ChartS style={props} />
<ChartS style={props} />
<ChartS style={props} />
<ChartS style={props} />
</Box>
    </Box>






  );
};

export default DashBoard;

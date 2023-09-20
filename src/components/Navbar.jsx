import React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import SettingsAccessibilityRoundedIcon from '@mui/icons-material/SettingsAccessibilityRounded';
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useDispatch, useSelector } from 'react-redux';
import {logout } from '../reducers/adminReducer';
import { darkModeOn } from '../reducers/darkModeReducer';
import { useNavigate } from 'react-router-dom';
import { drawer } from '../reducers/DrawermenuReducer';


const theme1 = createTheme({
  backgroundColor:'#371213',
  typography: {
    fontFamily: 'K2D, sans-serif',
    fontWeightBold: 700,  
  },
});
const theme2 = createTheme({
  backgroundColor:'#232323',
  typography: {
    fontFamily: 'K2D, sans-serif',
    fontWeightBold: 700,  
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));





export default function Navbar() {

  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);


  const [anchorEl, setAnchorEl] =useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =useState(null);
  const dispatch = useDispatch()
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.darkmode.darkmode)

  const user = useSelector((state)=>state.admin.user.user)
  const darkmodeHandler=()=>{
  
  
     isDarkMode ===true ? dispatch(darkModeOn(false)):  dispatch(darkModeOn(true))

    
}
  
  const toggleLeftDrawer = () => {
    setIsLeftDrawerOpen(!isLeftDrawerOpen);
  };




  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
 const handleLogout=()=>{
 dispatch(logout(true))
 }

 

const drw=useSelector((state)=>state.drawer)
const handleDrawermenu=(option,route)=>{
   dispatch(drawer(option))
navigate(route)

}


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const selectedStyle = {

    
    backgroundColor: '#230304',
    color: 'white',
  
    '&:hover': {
      backgroundColor: '#230304',

    },
  
  };
  const selectedStyle2 = {

    
    backgroundColor: '  #141414',
    color: 'white',
  
    '&:hover': {
      backgroundColor: '  #141414',

    },
  
  };



  const list = (backg) => (
    <Box
      sx={{ width:'auto' ,height:'100vh',backgroundColor:backg }}
      role="presentation"
     
    >


    {/* Drawer List */}
      <List sx={{paddingBottom:"0",paddingTop:'0'}}>
        {/* Dashboard */}
          <ListItem  disablePadding sx={{ color:'#ffff'}}>
            <ListItemButton    sx={drw.drawer === 'dashboard' ? (isDarkMode?selectedStyle2:selectedStyle) : {}}   onClick={()=>handleDrawermenu('dashboard','/')}>
              <ListItemIcon>
               <DashboardCustomizeRoundedIcon sx={{ color:'#ffff',left: '21px', position: 'inherit'}} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ color:'#ffff',}} />
            </ListItemButton>
          </ListItem>
      


       {/* Admins */}
          <ListItem disablePadding sx={{ color:'#ffff'}}>
      <ListItemButton  sx={drw.drawer=== 'admin' ? (isDarkMode?selectedStyle2:selectedStyle)  : {}}   onClick={()=>handleDrawermenu('admin','/admin')}>
      <ListItemIcon>
        <SupervisorAccountRoundedIcon sx={{ color:'#ffff',left: '21px', position: 'inherit'}}/>
      </ListItemIcon>
      <ListItemText primary="Admins"  sx={{ color:'#ffff',}}/> {/* Add text directly */}
    </ListItemButton>
  </ListItem>

 {/* Users */}
  <ListItem disablePadding sx={{ color:'#ffff'}}>
      <ListItemButton  sx={drw.drawer=== 'users' ?(isDarkMode?selectedStyle2:selectedStyle)  : {}}   onClick={()=>handleDrawermenu('users','/users')}>
      <ListItemIcon>
        <SettingsAccessibilityRoundedIcon sx={{ color:'#ffff',left: '21px', position: 'inherit'}}/>
      </ListItemIcon>
      <ListItemText primary="Users"  sx={{ color:'#ffff',}}/> {/* Add text directly */}
    </ListItemButton>
  </ListItem>

 {/* Drawer List */}
  <ListItem disablePadding sx={{ color:'#ffff'}}>
      <ListItemButton sx={{ color:'#ffff'}}>
      <ListItemIcon>
        <SupervisorAccountRoundedIcon sx={{ color:'#ffff',left: '21px', position: 'inherit'}}/>
      </ListItemIcon>
      <ListItemText primary="Admins"  sx={{ color:'#ffff',}}/> {/* Add text directly */}
    </ListItemButton>
  </ListItem>

   {/* Drawer List */}
  <ListItem disablePadding sx={{ color:'#ffff'}}>
      <ListItemButton sx={{ color:'#ffff'}}>
      <ListItemIcon>
        <PublishRoundedIcon sx={{ color:'#ffff',left: '21px', position: 'inherit'}}/>
      </ListItemIcon>
      <ListItemText primary="Publish"  sx={{ color:'#ffff',}}/> {/* Add text directly */}
    </ListItemButton>
  </ListItem>

      </List>
    
    
    </Box>
     
   
  );










  return (

    <ThemeProvider theme={theme2}> 
      
        
    
   
    <Box  sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: isDarkMode ? theme2.backgroundColor: theme1.backgroundColor}}>

        
        
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleLeftDrawer}
          >
       
           <MenuIcon />
       
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', fontWeight: 800  } }}
          >
            COIN POOL
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


        <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={darkmodeHandler} >
              <Badge  >
          {isDarkMode===true?<DarkModeRoundedIcon />:<LightModeRoundedIcon />}
              </Badge>
            </IconButton>
        

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
  

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
              <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>


            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
           
            </IconButton>
            
          </Box>
          <Typography>
              {user.name}
            </Typography>


          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

    <Box > 
            <Drawer
        anchor="left"
        open={isLeftDrawerOpen}
        onClose={toggleLeftDrawer} // Toggle left drawer on close
        sx={{height:'10vh'}}
      >

      
        {list(isDarkMode ? theme2.backgroundColor: theme1.backgroundColor)}
      
      </Drawer>
      
</Box >
      {renderMobileMenu}
      {renderMenu}
    
    
    </Box>
     </ThemeProvider>
  );
}

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   Button, 
//   IconButton, 
//   Drawer, 
//   List, 
//   ListItem, 
//   Box,
//   Avatar,
//   Divider,
//   ListItemIcon,
//   ListItemText
// } from "@mui/material";
// import {
//   Menu as MenuIcon,
//   Home as HomeIcon,
//   ContactMail as ContactIcon,
//   MedicalServices as ServicesIcon,
//   Info as AboutIcon,
//   ExitToApp as LogoutIcon,
//   AccountCircle as ProfileIcon
// } from "@mui/icons-material";

// export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user') || '{}'); // Fixed JSON parsing

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem('token');
      
//       await fetch('http://127.0.0.1:5000/logout', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
      
//       if (setIsAuthenticated) {
//         setIsAuthenticated(false);
//       }
      
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

//   const navItems = [
//     { name: "Home", path: "/home", icon: <HomeIcon /> },
//     { name: "Services", path: "/services", icon: <ServicesIcon /> },
//     { name: "About Us", path: "/about", icon: <AboutIcon /> },
//     { name: "Contact", path: "/contact", icon: <ContactIcon /> },
//   ];

//   return (
//     <>
//       <AppBar position="static" sx={{ backgroundColor: "#000", color: "#fff" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography 
//             variant="h6" 
//             sx={{ 
//               fontWeight: "bold",
//               display: 'flex',
//               alignItems: 'center',
//               gap: 1,
//               color: 'white',
//               textDecoration: 'none'
//             }}
//             component={Link} 
//             to="/home"
//           >
//             Kidney Stones Detector
//           </Typography>

//           <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center', gap: 1 }}>
//             {navItems.map((item) => (
//               <Button 
//                 key={item.name}
//                 color="inherit" 
//                 component={Link} 
//                 to={item.path}
//                 startIcon={item.icon}
//                 sx={{ textTransform: 'none' }}
//               >
//                 {item.name}
//               </Button>
//             ))}
            
//             {isAuthenticated ? (
//               <>
//                 <Avatar 
//                   alt={user.username || 'User'} 
//                   src="/static/images/avatar/1.jpg" 
//                   sx={{ width: 32, height: 32, marginLeft: 2 }}
//                 />
//                 <Button
//                   variant="contained"
//                   sx={{ 
//                     backgroundColor: "#44CBCB", 
//                     marginLeft: 2,
//                     '&:hover': {
//                       backgroundColor: "#38a8a8"
//                     }
//                   }}
//                   startIcon={<LogoutIcon />}
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </Button>
//               </>
//             ) : (
//               <Button
//                 variant="contained"
//                 sx={{ 
//                   backgroundColor: "#44CBCB", 
//                   marginLeft: 2,
//                   '&:hover': {
//                     backgroundColor: "#38a8a8"
//                   }
//                 }}
//                 component={Link}
//                 to="/login"
//               >
//                 Login
//               </Button>
//             )}
//           </Box>

//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={handleDrawerToggle}
//             sx={{ display: { md: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: 240,
//             backgroundColor: '#1a1a1a',
//             color: '#fff'
//           },
//         }}
//       >
//         <Box sx={{ textAlign: 'center', py: 2 }}>
//           <Typography variant="h6">Kidney Stones Detector</Typography>
//         </Box>
//         <Divider sx={{ borderColor: '#333' }} />
        
//         {isAuthenticated && (
//           <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
//             <Avatar alt={user.username || 'User'} src="/static/images/avatar/1.jpg" />
//             <Typography>{user.username || 'User'}</Typography>
//           </Box>
//         )}
        
//         <List>
//           {navItems.map((item) => (
//             <ListItem 
//               button 
//               key={item.name}
//               component={Link} 
//               to={item.path}
//               onClick={handleDrawerToggle}
//               sx={{
//                 '&:hover': {
//                   backgroundColor: '#333'
//                 }
//               }}
//             >
//               <ListItemIcon sx={{ color: '#fff' }}>
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText primary={item.name} />
//             </ListItem>
//           ))}
          
//           <Divider sx={{ borderColor: '#333' }} />
          
//           {isAuthenticated ? (
//             <ListItem 
//               button 
//               onClick={() => {
//                 handleLogout();
//                 handleDrawerToggle();
//               }}
//               sx={{
//                 '&:hover': {
//                   backgroundColor: '#333'
//                 }
//               }}
//             >
//               <ListItemIcon sx={{ color: '#fff' }}>
//                 <LogoutIcon />
//               </ListItemIcon>
//               <ListItemText primary="Logout" />
//             </ListItem>
//           ) : (
//             <ListItem 
//               button 
//               component={Link}
//               to="/login"
//               onClick={handleDrawerToggle}
//               sx={{
//                 '&:hover': {
//                   backgroundColor: '#333'
//                 }
//               }}
//             >
//               <ListItemIcon sx={{ color: '#fff' }}>
//                 <ProfileIcon />
//               </ListItemIcon>
//               <ListItemText primary="Login" />
//             </ListItem>
//           )}
//         </List>
//       </Drawer>
//     </>
//   );
// }
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  Box,
  Avatar,
  Divider,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  ContactMail as ContactIcon,
  MedicalServices as ServicesIcon,
  Info as AboutIcon,
  ExitToApp as LogoutIcon,
  AccountCircle as ProfileIcon
} from "@mui/icons-material";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}'); // Fixed JSON parsing

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.log("No token found, already logged out.");
        setIsAuthenticated(false);
        navigate('/login');
        return;
      }

      const res = await fetch('http://127.0.0.1:5000/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (res.ok) {
        console.log("Logout successful!");
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        setIsAuthenticated(false);
        navigate('/login');
      } else {
        console.error('Logout failed:', res.status);
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navItems = [
    { name: "Home", path: "/home", icon: <HomeIcon /> },
    { name: "Services", path: "/services", icon: <ServicesIcon /> },
    { name: "About Us", path: "/about", icon: <AboutIcon /> },
    { name: "Contact", path: "/contact", icon: <ContactIcon /> },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: "bold",
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'white',
              textDecoration: 'none'
            }}
            component={Link} 
            to="/home"
          >
            Kidney Stones Detector
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button 
                key={item.name}
                color="inherit" 
                component={Link} 
                to={item.path}
                startIcon={item.icon}
                sx={{ textTransform: 'none' }}
              >
                {item.name}
              </Button>
            ))}
            
            {isAuthenticated ? (
              <>
                <Avatar 
                  alt={user.username || 'User'} 
                  src="/static/images/avatar/1.jpg" 
                  sx={{ width: 32, height: 32, marginLeft: 2 }}
                />
                <Button
                  variant="contained"
                  sx={{ 
                    backgroundColor: "#44CBCB", 
                    marginLeft: 2,
                    '&:hover': {
                      backgroundColor: "#38a8a8"
                    }
                  }}
                  startIcon={<LogoutIcon />}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                sx={{ 
                  backgroundColor: "#44CBCB", 
                  marginLeft: 2,
                  '&:hover': {
                    backgroundColor: "#38a8a8"
                  }
                }}
                component={Link}
                to="/login"
              >
                Login
              </Button>
            )}
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#1a1a1a',
            color: '#fff'
          },
        }}
      >
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="h6">Kidney Stones Detector</Typography>
        </Box>
        <Divider sx={{ borderColor: '#333' }} />
        
        {isAuthenticated && (
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar alt={user.username || 'User'} src="/static/images/avatar/1.jpg" />
            <Typography>{user.username || 'User'}</Typography>
          </Box>
        )}
        
        <List>
          {navItems.map((item) => (
            <ListItem 
              button 
              key={item.name}
              component={Link} 
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  backgroundColor: '#333'
                }
              }}
            >
              <ListItemIcon sx={{ color: '#fff' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
          
          <Divider sx={{ borderColor: '#333' }} />
          
          {isAuthenticated ? (
            <ListItem 
              button 
              onClick={() => {
                handleLogout();
                handleDrawerToggle();
              }}
              sx={{
                '&:hover': {
                  backgroundColor: '#333'
                }
              }}
            >
              <ListItemIcon sx={{ color: '#fff' }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          ) : (
            <ListItem 
              button 
              component={Link}
              to="/login"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  backgroundColor: '#333'
                }
              }}
            >
              <ListItemIcon sx={{ color: '#fff' }}>
                <ProfileIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
}

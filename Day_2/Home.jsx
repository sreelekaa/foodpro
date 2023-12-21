import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { red, yellow, green, blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Add this import
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// Footer component
const Footer = () => (
  <Box sx={{ textAlign: 'center', padding: '1rem', backgroundColor: '#b71c1c', flexShrink: '0' }}>
    <Typography variant="body2" color="textSecondary">
      © 2023 CraveEats. All rights reserved.
    </Typography>
  </Box>
);

export default function CombinedAppBarWithDrawer() {
  const [state, setState] = React.useState({
    left: false,
    darkMode: false,
  });
  const toggleDarkMode = () => {
    setState({ ...state, darkMode: !state.darkMode });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const icons = [<InfoIcon />,<AddAlertIcon />,<MonetizationOnIcon />,<BusinessCenterIcon /> ];
  const icons1 = [<SettingsIcon />,<AccountCircleIcon />,<PowerSettingsNewIcon /> ];
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        {['More Info', 'Orders', 'Pricing', 'About us'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {icons[index % icons.length]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icons1[index%icons1.length]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: red[900],
      },
      secondary: {
        main: yellow[700],
      },
      success: {
        main: green[500],
      },
      info: {
        main: blue[500],
      },
      mode: state.darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '95rem' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                CraveEats
              </Typography>
              <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <img
                  src="/Untitled design.png"
                  alt="Background"
                  style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
                />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>

        <SwipeableDrawer
          anchor="left"
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list()}
          <List>
            <ListItemButton onClick={toggleDarkMode}>
              <ListItemIcon>
                <Brightness4Icon /> {/* Dark mode icon */}
              </ListItemIcon>
              <ListItemText primary={`Switch to ${state.darkMode ? 'Light' : 'Dark'} Mode`} />
            </ListItemButton>
          </List>
        </SwipeableDrawer>

        <Box sx={{ flexGrow: 1, overflow: 'hidden', padding: '2rem', color: theme.palette.secondary.main }}>
          {/* Page content goes here */}
          <div>
            <Typography variant="h4" gutterBottom>
              Welcome to CraveEats - Culinary Adventure Begins Here!
            </Typography>
            <Typography variant="body1" paragraph>
              🍔 Hungry? Tired of the same old food routine? You're in the right place! 🌮
            </Typography>
            
            <Typography variant="body1" paragraph>
              Ready to order? Just slide open our virtual menu and let the feast begin. 🚀
            </Typography>
            <Typography variant="body1" paragraph>
              Psst... our food is so good; you might just want to order it twice! 😋
            </Typography>
          </div>
          <Button variant="contained" color="success" size="large" sx={{ marginTop: '2rem' }}>
            Order Now
          </Button>
        </Box>
         
        {/* Include the Footer component */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

import React from 'react'
import { 
    AppBar, 
    Container, 
    Box, 
    Menu, 
    Toolbar, 
    Button } from '@mui/material';

import logo1 from '../images/PKP.png'
import logo2 from '../images/PKP-Centered-Logo.png'

import { useNavigate } from 'react-router-dom'

// These two must be aligned... sorry
const pages = ['About', 'Brothers', 'Alumni', 'Events'];
const urls = ['/', '/brothers', '/alumni', '/events']

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate()

  return (
    <AppBar style={{position:'sticky', backgroundColor:'white'}}>
      <Container maxWidth="xl" style={{marginLeft:0}}>
        <Toolbar disableGutters>
          <img style={{height:100, padding:20}} src={logo2} alt="Pi Kappa Phi star and shield logo"/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {urls.map((url) => (
                <MenuItem key={url}>
                  <Typography textAlign="center">{url}</Typography>
                </MenuItem>
                
              ))} */}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={() => navigate(urls[i])}
                sx={{ my: 2, color: 'blue', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar
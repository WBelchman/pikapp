import { 
    AppBar, 
    Container, 
    Box, 
    Toolbar, 
    Button } from '@mui/material';

// import logo1 from '../images/PKP.png'
import logo2 from '../images/PKP-Centered-Logo.png'

import { useNavigate } from 'react-router-dom'
import mobileCheck from '../utils/mobileDetect';

// These arrays must be aligned... 
const pages = ['About', 'Brothers', 'Alumni', 'Events'];
const urls = ['/about', '/brothers', '/alumni', '/events']

const NavBar = () => {
  const navigate = useNavigate()

  const isMobile = mobileCheck();

  const logoStack = isMobile ? 'column' : 'row'

  return (
    <AppBar style={{position:'sticky', backgroundColor:'white', opacity:0.95}}>
      <Container style={{marginLeft:0, width:"100vw"}}>
        <Toolbar disableGutters style={{display:'flex', flexDirection:logoStack, flexWrap:'wrap'}}>

          <img  style={{height:"7vw", minHeight:"60px", maxHeight:"100px", padding:20}} 
            onClick={() => navigate('/')} src={logo2} alt="Pi Kappa Phi star and shield logo"/>

          <Box sx={{display: 'flex'}}>
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={() => navigate(urls[i])}
                sx={{ marginTop: isMobile ? 0 : 4, marginBottom: 0, fontSize:"medium", padding:2, color: 'blue', display: 'block' }}
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
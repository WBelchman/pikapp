
import { 
  BrowserRouter as Router, 
  Routes,
  Route } from 'react-router-dom';

import NavBar from './components/navbar';
import Homepage from './pages/homepage';
import About from './pages/about';
import Brothers from './pages/brothers';
import Events from './pages/events';

import SplashScreen from './components/splashScreen'
import CustomFooter from './components/customFooter'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const routerBaseName = process.env.PUBLIC_URL;

export default function App() {

  return (
    <Router basename={routerBaseName}>
      <NavBar></NavBar>
      <SplashScreen></SplashScreen>
     
      <div id="content" 
        style={{position:"relative", width:"80%", margin:"40% 10% 5% 10%", padding:"10px 0", backgroundColor:"white", border:"5px solid darkblue"}}>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/brothers" element={<Brothers/>}/>
          <Route path="/events" element={<Events/>}/>
        </Routes>
      </div>
      <CustomFooter></CustomFooter>
    </Router>
  )
};

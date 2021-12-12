
import { 
  BrowserRouter as Router, 
  Routes,
  Route } from 'react-router-dom';

import NavBar from './components/navbar';
import Homepage from './pages/homepage';
import About from './pages/about';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {

  return (
    <div>
      <Router>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
};

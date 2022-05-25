
import './App.css';
import {  HashRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Layout from './Layout';
import Olimpico from './pages/Olimpico';
import AutomationPlatform from './pages/AutomationPlatform';
import CloudAutomation from './pages/CloudAutomation';
import PortfolioSite from './pages/PortfolioSite';

function App() {
  return (
        <>
        <div className="App">
          
          <HashRouter>
          <Routes>
              <Route path="/olimpico" element={<Olimpico />} />
              <Route path="/automationplatform" element={<AutomationPlatform />} />
              <Route path="/cloudautomation" element={<CloudAutomation />} />
              <Route path="/portfoliosite" element={<PortfolioSite />} />
              <Route path="*" element={<Layout />} />
            </Routes>
          </HashRouter>
        </div>  
        </>
  );
}

export default App;

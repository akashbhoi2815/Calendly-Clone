
import './App.css';
import CalendlyNav2 from './components/Calendly/CalendlyNav2';
import CalendlyNavbar, { Navbar } from './components/Calendly/CalendlyNavbar';

import  {MainRoutes}  from './Pages/MainRoutes';


function App() {
  return (
    <div className="App">
      {/* <MainRoutes /> */}
      <CalendlyNavbar/>
      <CalendlyNav2/>
    </div>
  );
}

export default App;

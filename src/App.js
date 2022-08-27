
import './App.css';
import EventCard from './components/Calendly/EventCard';
import EventTypes from './components/Calendly/EventTypes';
import { AddEventPage } from './Pages/AddEventPage/AddEventPage';

import { MainRoutes } from './Pages/MainRoutes';
 import CalendlyHomePage from './Pages/CalendlyHomePage/CalendlyHomePage'

function App() {
  return (
    <div className="App">

    <MainRoutes/>
    {/* <EventCard /> */}
    {/* <EventTypes/> */}
    {/* <CalendlyHomePage/>
    <AddEventPage/> */}
  
    </div>
  );
}

export default App;

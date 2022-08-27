import "./App.css";
import MeetingShedule from "./components/Calendly/MeetingShedule/MeetingShedule";

import { MainRoutes } from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <MeetingShedule/>
    </div>
  );
}

export default App;

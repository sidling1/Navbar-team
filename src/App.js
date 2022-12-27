import './App.css';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Events from './Components/Events/Eventspt';
import Eventspt from './Components/Events/Eventspt';
import Eventsps from './Components/Events/Eventsps';
import Eventscc from './Components/Events/Eventscc';
import Eventshf from './Components/Events/Eventshf';
import Merch from './Components/Merch';
import Campaigns from './Components/Campaigns/Campaigns';
import Teams from './Components/Teams';
import MUN from './Components/MUN';
import Sponsors from './Components/Sponsors';
import Contests from './Components/Contests/Contests';
import ErrorPage from './Components/ErrorPage';
import BookTickets from './Components/BookTickets';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'           element = {<Home />}/>
        <Route path='/Events'      element = {<Events />}/>
        <Route path='/Events/pt'      element = {<Eventspt />}/>
        <Route path='/Events/ps'      element = {<Eventsps />}/>
        <Route path='/Events/cc'      element = {<Eventscc />}/>
        <Route path='/Events/hf'      element = {<Eventshf />}/>
        <Route path='Merch'       element = {<Merch />}/>
        <Route path='Campaigns'   element = {<Campaigns />}/>
        <Route path='Teams'       element = {<Teams />}/>
        <Route path='MUN'         element = {<MUN />}/>
        <Route path='Sponsors'    element = {<Sponsors />}/>
        <Route path='Contests'    element = {<Contests />}/>
        <Route path='BookTickets' element = {<BookTickets />} />
        <Route path='*'           element = {<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

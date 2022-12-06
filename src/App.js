import logo from './logo.svg';
import './App.css';
import Header from './Navbar/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
    </Router>
  );
}

export default App;

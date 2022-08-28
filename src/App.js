import './App.css';
import Navbar from  './components/Navbar';
import HeroSection from './components/HeroSection';
import Home from './components/Pages/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;

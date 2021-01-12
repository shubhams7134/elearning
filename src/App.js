import logo from './logo.svg';
import './App.css';
import Menu from "./Navbar";
import msd from "./images/msd.png";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cardila from "./Card";
import Home from "./Home";
import DevCardila from "./Devcard";
import MarCardila from "./Marcard";
import DesCardila from "./Descard";
import BusCardila from "./Buscard";
import MusCardila from "./Muscard";
function App() {
  return (
    <div className="App" >
     {/* <img src={msd} alt="bg" style={{zIndex: "-1", width:"100%", height:"800px",filter: "brightness(0.5)"}} /> */}
    {/* <Menu /> */}
    <Router>
    
    <Switch>

    
      <Route path="/" exact component={Home} />
      <Route  path="/course" exact component={Cardila}/>
      <Route  path="/course/development" exact component={DevCardila}/>
      <Route  path="/course/marketing" exact component={MarCardila}/>
      <Route  path="/course/design" exact component={DesCardila}/>
      <Route  path="/course/business" exact component={BusCardila}/>
      <Route  path="/course/music" exact component={MusCardila}/>

      
    </Switch>

    </Router>
      
    </div>
  );
}

export default App;

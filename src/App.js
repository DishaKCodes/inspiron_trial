// import { useRef } from 'react';
import "./App.css";
import Home from "./Pages/Home";
import Probstatpg from "./Pages/Probstatpg";
import Judges from "./Pages/Judges";
import Prizes from "./Pages/Prizes";
import JudgesandSponsor from "./Pages/JudgesandSponsor";
import Register from "./Pages/Register";
import FAQs from "./Pages/FAQs";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Contactus from "./Pages/Contactus";


function App() {
  return (
    <>    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/">
          <Home></Home>
        </Route> */}
        <Route exact path="/domains" component={Probstatpg} />
        <Route exact path="/judges" component={Judges} />
        <Route exact path="/prizes" component={Prizes} />
        <Route exact path="/sponsors" component={JudgesandSponsor} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/faqs" component={FAQs} />
        <Route exact path="/contact-us" component={Contactus} />

      </Switch>
    </Router>
     
    </>

  );
}

export default App;

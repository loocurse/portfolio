import "./styles/app.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import Experience from "./contents/Experience";
import Portfolio from "./contents/Portfolio";
import Contact from "./contents/Contact";

function App() {
  return (
      <>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </div>
        </Router>
      </>
  );
}

export default App;

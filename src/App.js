import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Nav from "./components/Nav";

// Author: Karl Zivkovic

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;

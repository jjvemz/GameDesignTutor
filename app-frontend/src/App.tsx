import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Tutor from "./pages/Tutor";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/pricing";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/tutor" element={<Tutor />}/>
          <Route path="*"element={<NotFound />}/>
        </Routes>
    </Router>
  );
}

export default App;

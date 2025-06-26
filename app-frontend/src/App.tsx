import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import NotFound from "./pages/NotFound";
import Homelayout from "./Layout/Home/Homelayout";
import PricingLayout from "./Layout/Pricing/PricingLayout";
import AboutLayout from "./Layout/About/AboutLayout";
import TutorLayout from "./Layout/Tutor/TutorLayout";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homelayout />}/>
          <Route path="/pricing" element={<PricingLayout />}/>
          <Route path="/about" element={<AboutLayout />}/>
          <Route path="/tutor" element={<TutorLayout />}/>
          <Route path="*"element={<NotFound />}/>
        </Routes>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { routes } from "./routes/route";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, lazy }) => {
          const routeElement = lazy ? (
            <Suspense fallback={<div>Loading...</div>}>
              {element}
            </Suspense>
          ) : (
            element
          );

          return <Route key={path} path={path} element={routeElement} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;

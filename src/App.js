import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Restaurants from "./component/Restaurants";
import RestaurantDetails from "./component/RestaurantDetails";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="grid-container">
          <NavBar />
          <div>
            <Header />
            <Routes>
              <Route path="/restaurant/:id" element={<RestaurantDetails />} />
              <Route path="/" element={<Restaurants />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

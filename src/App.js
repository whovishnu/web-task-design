import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import './App.css';

import NavBar from './component/NavBar';
import Header from './component/Header'
import Restaurants from './component/Restaurants';
import RestaurantDetails from './component/RestaurantDetails'
import { useState } from "react";


function App() {
  const [cuisineList, setCuisineList] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [searchRestaurant, setSearchRestaurant] = useState("")

  return (
    <Router>
      <div className='grid-container'>
        <NavBar />
        <div>
          <Header
            cuisineList={cuisineList}
            setSelectedCuisine={setSelectedCuisine}
            selectedCuisine={selectedCuisine}
            setSearchRestaurant={setSearchRestaurant} />
          <Routes>
            <Route path='/restaurant/:id' element={<RestaurantDetails />} />
            <Route path="/" element={<Restaurants
              searchRestaurant={searchRestaurant}
              setCuisineList={setCuisineList}
              selectedCuisine={selectedCuisine} />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;

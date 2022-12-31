import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { allRestaurantsAPI } from "../../utils/api";
import { setCuisineList } from "../../redux/action";

function Restaurants() {
  const dispatch = useDispatch();
  const { selectedCuisine, searchRestaurant } = useSelector(
    (state) => state.searchFilter
  );

  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(allRestaurantsAPI)
      .then((res) => res.json())
      .then((res) => {
        let cuisineList = [];
        setOriginalList(res.allRestaurants);
        res.allRestaurants.forEach((item) => {
          cuisineList = [...cuisineList, ...JSON.parse(item.restaurantCuisine)];
        });
        dispatch(setCuisineList([...new Set(cuisineList)]));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (originalList.length) {
      let list = [];
      if (searchRestaurant.length) {
        list = originalList.filter((item) =>
          item.restaurantName
            .toLowerCase()
            .startsWith(searchRestaurant.trim().toLowerCase())
        );
      } else {
        list = originalList;
      }
      if (selectedCuisine == "all") {
        setList(list);
      } else {
        setList(
          list.filter((item) =>
            JSON.parse(item.restaurantCuisine).includes(selectedCuisine)
          )
        );
      }
    }
  }, [selectedCuisine, originalList, searchRestaurant]);

  return (
    <div className="container">
      <h1>Restaurants</h1>
      <div className="restaurant-container">
        {loading ? (
          <div>Please wait! Restaurant is loading...</div>
        ) : (
          list.map((item) => {
            return (
              <Link to={`/restaurant/${item.id}`}>
                <div className="restaurant-card">
                  <img
                    src={item.restaurantImage}
                    className="restaurant-image"
                    alt="restaurantImage"
                  />
                  <div className="flex-between">
                    <div className="restaurant-title">
                      {item.restaurantName}{" "}
                    </div>
                    <div className={item.isOpen ? "open" : "close"}>
                      {item.isOpen ? "Open Now" : "Closed"}
                    </div>
                  </div>
                  <div className="restaurant-description h-100">
                    {item.restaurantDescription}
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Restaurants;

import { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";

import { allRestaurantsAPI } from '../utils/api'

function Restaurants({setCuisineList,selectedCuisine}) {
    const [originalList, setOriginalList] = useState([]);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(allRestaurantsAPI)
            .then((res) => res.json())
            .then((res) => {
                let cuisineList = [];
                setOriginalList(res.allRestaurants)
                res.allRestaurants.forEach(item => {
                    cuisineList = [...cuisineList, ...JSON.parse(item.restaurantCuisine)];
                })
                setCuisineList([...new Set(cuisineList)])
                setLoading(false);
            })
    }, [selectedCuisine])

    useEffect(()=>{
        if(originalList.length){
            if(selectedCuisine == 'all'){
                setList(originalList);
            }else{
                setList(originalList.filter(item => JSON.parse(item.restaurantCuisine).includes(selectedCuisine)));
            }
        }
    },[selectedCuisine,originalList])

    return (
        <div className="container">
            <h1>Restaurants</h1>
            <div className="restaurant-container">
                {loading ?
                    <div>
                        Please wait! Restaurant is loading...
                    </div>
                    : list.map((item) => {
                        return (
                            <Link to={`/restaurant/${item.id}`}>
                                <div className="restaurant-card">
                                    <img src={item.restaurantImage} className="restaurant-image" />
                                    <div className="flex-between">
                                        <div className="restaurant-title">{item.restaurantName} </div>
                                        <div className={item.isOpen ? "open" : "close"}>{item.isOpen ? "Open Now" : "Closed"}</div>
                                    </div>
                                    <div className="restaurant-description">{item.restaurantDescription}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}

export default Restaurants;
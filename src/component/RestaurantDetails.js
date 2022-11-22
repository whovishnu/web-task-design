import { useEffect, useState } from "react";
import { restaurantDetailsAPI } from "../utils/api";
import Menu from './Menu'
import {
    useParams
} from "react-router-dom";

const clock = require('../assets/image/clock.png')
const url = require('../assets/image/url.png')
const phone = require('../assets/image/phone.png')

function RestaurantDetails() {
    const { id } = useParams()
    const [restaurantDetails, setResaurantDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(restaurantDetailsAPI)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false)
                setResaurantDetails(res.restaurantDetails.filter(item => item.id == id)[0])
            })
    }, [])

    return loading ?
            <div>
                Please wait! Restaurant Details is loading...
            </div>
            :<div className="container">
                <div className="flex-row">
                    <div>
                        <div className="restaurant-heading">{restaurantDetails?.restaurantName}</div>
                        <div className="restaurant-description">{restaurantDetails?.restaurantDescription}</div>
                        <div className="restaurant-description">
                            <img src={clock} className="menu-icon" style={{marginRight:10}}/>
                            {restaurantDetails?.openingHours}</div>
                        <div className="restaurant-description">
                        <img src={phone} className="menu-icon" style={{marginRight:10}}/>
                            {restaurantDetails?.contactNumber}</div>
                        <div className="restaurant-description">
                        <img src={url} className="menu-icon" style={{marginRight:10}}/>
                            {restaurantDetails?.websiteUrl}</div>
                    </div>
                    <div>
                        <img src={restaurantDetails?.restaurantImage} style={{ borderRadius: 16,marginLeft:20 }} width={560} height={300} />
                    </div>
                </div>
                <Menu restaurantName={restaurantDetails?.restaurantName} />
            </div>
}

export default RestaurantDetails;
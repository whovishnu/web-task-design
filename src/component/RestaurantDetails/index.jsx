import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Menu from "../Menu";
import { restaurantDetailsAPI } from "../../utils/api";

import clock from "../../assets/image/clock.png";
import url from "../../assets/image/url.png";
import phone from "../../assets/image/phone.png";

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurantDetails, setResaurantDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(restaurantDetailsAPI)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setResaurantDetails(
          res.restaurantDetails.filter((item) => item.id == id)[0]
        );
      });
  }, []);

  return loading ? (
    <div>Please wait! Restaurant Details is loading...</div>
  ) : (
    <div className="container">
      <div className="flex-row">
        <div>
          <div className="restaurant-heading">
            {restaurantDetails?.restaurantName}
          </div>
          <div className="restaurant-description">
            {restaurantDetails?.restaurantDescription}
          </div>
          <div className="restaurant-description">
            <img src={clock} className="menu-icon m-10" alt="icon" />
            {restaurantDetails?.openingHours}
          </div>
          <div className="restaurant-description">
            <img src={phone} className="menu-icon m-10" alt="icon" />
            {restaurantDetails?.contactNumber}
          </div>
          <div className="restaurant-description">
            <img src={url} className="menu-icon m-10" alt="icon" />
            {restaurantDetails?.websiteUrl}
          </div>
        </div>
        <div>
          <img
            alt="restaurantImage"
            src={restaurantDetails?.restaurantImage}
            className="restaurant-image-br"
            width={560}
            height={300}
          />
        </div>
      </div>
      <Menu restaurantName={restaurantDetails?.restaurantName} />
    </div>
  );
}

export default RestaurantDetails;

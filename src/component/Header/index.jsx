import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";

import SearchFilter from "../SearchFilter";

import backIcon from "../../assets/image/back.png";
import filterIcon from "../../assets/image/filter.png";
import cartIcon from "../../assets/image/cart.png";
import searchIcon from "../../assets/image/search.png";
import { setSearchRestaurant } from "../../redux/action";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  const { selectedCuisine } = useSelector((state) => state.searchFilter);
  const [searchText, setSearchText] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="header flex-between">
      <div className="main-button" onClick={() => navigate(-1)}>
        <img src={backIcon} className="menu-icon" />
      </div>

      <div className="flex-row">
        {/* <div className="main-button">Store Name</div> */}
        <div className="search-bar">
          <img src={searchIcon} className="search-icon" />
          <input
            className="search-box"
            type="text"
            value={searchText}
            onKeyDown={(e) => {
              if (e.code == "Enter") dispatch(setSearchRestaurant(searchText));
            }}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search for Restaurants (Press Enter to search)"
          />
        </div>
        <div
          className="main-button p-r mr-10"
          onClick={() => setShowFilter(true)}
        >
          <img src={filterIcon} className="menu-icon" />
          {selectedCuisine !== "all" && <label className="label">1</label>}
        </div>
        <Link to="/cart">
          <div className="main-button button2">
            <img src={cartIcon} className="menu-icon" />
            {/* {Object.value(cart) && <label className="label">1</label>} */}
          </div>
        </Link>
      </div>
      {showFilter && <SearchFilter setShowFilter={setShowFilter} />}
    </div>
  );
}

export default Header;

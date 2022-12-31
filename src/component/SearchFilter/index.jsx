import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchFilter.css";

import { setSelectedCuisine } from "../../redux/action";

import close from "../../assets/image/close.png";
import fire from "../../assets/image/fire.png";

function SearchFilter({ setShowFilter }) {
  const dispatch = useDispatch();
  const { selectedCuisine } = useSelector((state) => state.searchFilter);
  const cuisineList = useSelector((state) => state.cuisine);
  const [selectedValue, setSelectedValue] = useState(selectedCuisine);

  const handleApply = () => {
    dispatch(setSelectedCuisine(selectedValue));
    setShowFilter(false);
  };

  return (
    <div className="filter-container">
      <div className="filter-box">
        <div className="flex-between">
          <h2 className="mb-30">Search filters</h2>
          <div
            className="main-button button3"
            onClick={() => setShowFilter(false)}
          >
            <img src={close} width={14} height={14} alt="icon" />
          </div>
        </div>
        <h2>Sort by</h2>
        <div className="flex-row">
          <div className="flex-row center text-orange">
            <div className="orange-btn">
              <img src={fire} width={18} height={18} alt="icon" />
            </div>
            Open
          </div>
        </div>
        <h2>Cuisine</h2>
        <div className="restaurant-container">
          <div
            onClick={() => setSelectedValue("all")}
            className={
              selectedValue === "all"
                ? "orange-btn font-w-400"
                : "main-button button3 font-w-400"
            }
          >
            All
          </div>
          {cuisineList.map((item) => {
            return (
              <div
                onClick={() => setSelectedValue(item)}
                className={
                  selectedValue === item
                    ? "orange-btn font-w-400"
                    : "main-button button3 font-w-400"
                }
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="main-button apply-btn" onClick={handleApply}>
          Apply Filter
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;

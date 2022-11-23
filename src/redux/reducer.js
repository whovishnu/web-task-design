import { combineReducers } from "redux";

const cuisineReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_CUISINE_DATA":
            return action.payload;
        default:
            return state;
    }
};

const searchFilterReducer = (
    state = { selectedCuisine: "all", searchRestaurant: "" },
    action
) => {
    switch (action.type) {
        case "SET_SELECTED_CUISINE":
            return { ...state, selectedCuisine: action.payload };
        case "SET_SEARCH_TEXT":
            return { ...state, searchRestaurant: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cuisine: cuisineReducer,
    searchFilter: searchFilterReducer,
});

export default rootReducer;

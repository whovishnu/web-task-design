function setCuisineList(data) {
    return {
        type: "SET_CUISINE_DATA",
        payload: data,
    };
}

function setSelectedCuisine(data) {
    return {
        type: "SET_SELECTED_CUISINE",
        payload: data,
    };
}

function setSearchRestaurant(data) {
    return {
        type: "SET_SEARCH_TEXT",
        payload: data,
    };
}

export { setCuisineList, setSelectedCuisine, setSearchRestaurant };

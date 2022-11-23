import { useEffect, useState } from "react";

import { menuAPI } from "../../utils/api";

function Menu({ restaurantName }) {
    const [originalList, setOriginalList] = useState([]);
    const [list, setList] = useState([]);
    const [category, setCategory] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(menuAPI)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                let filterList = res.menu.filter((item) =>
                    JSON.parse(item.restaurantName).includes(restaurantName)
                );
                setList(filterList);
                setOriginalList(filterList);

                let tempObj = {};
                filterList?.forEach((item) => {
                    JSON.parse(item.itemCategory).forEach((subItem) => {
                        if (tempObj[subItem]) {
                            tempObj[subItem]++;
                        } else {
                            tempObj[subItem] = 1;
                        }
                    });
                });

                setCategory(tempObj);
            });
    }, []);

    return loading ? (
        <div>Please wait! Menu List is loading...</div>
    ) : (
        <>
            <div className="flex-row">
                <div
                    onClick={() => {
                        setList(originalList);
                        setSelectedCategory("all");
                    }}
                    className={
                        selectedCategory === "all" ? "main-button " : "main-button button3"
                    }
                >
                    All
                </div>
                {Object.keys(category).map((item) => {
                    return (
                        <div
                            className={
                                selectedCategory === item
                                    ? "main-button "
                                    : "main-button button3"
                            }
                            onClick={() => {
                                setSelectedCategory(item);
                                setList(
                                    originalList.filter((subMenu) =>
                                        JSON.parse(subMenu.itemCategory).includes(item)
                                    )
                                );
                            }}
                        >
                            {`${item} (${category[item]})`}
                        </div>
                    );
                })}
            </div>

            <div className="restaurant-container">
                {list.map((item) => {
                    return (
                        <div className="restaurant-card">
                            <img
                                className="mb-10 br-10 min-h-176"
                                alt="dishImage"
                                src={item.itemPhoto}
                                width={336}
                                height={176}
                            />
                            <div className="flex-between">
                                <div className="itemName">{item.itemName}</div>
                                <div className="itemCost">{`$${item.itemCost}`}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Menu;

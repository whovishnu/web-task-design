import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { menuAPI } from "../../utils/api";
import { addToCart } from "../../redux/action";

function Menu({ restaurantName }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
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
              key={item}
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
            <div key={item.id} className="restaurant-card">
              <img
                className="mb-10 br-10 min-h-176"
                alt="dishImage"
                src={item.itemPhoto}
                width={336}
                height={176}
                style={{
                  minHeight: 180,
                }}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://bookmychefs.com/uploads/dish/default_food.jpg";
                }}
              />
              <div className="flex-between">
                <div className="itemName">{item.itemName}</div>
                <div className="itemCost">{`$${item.itemCost}`}</div>
              </div>
              {!cart[item.id] ? (
                <div
                  style={{
                    backgroundColor: "#503E9D",
                    padding: 10,
                    marginTop: 4,
                    borderRadius: 8,
                    color: "white",
                  }}
                  onClick={() => {
                    console.log(cart);
                    if (cart[item.id]) {
                      dispatch(
                        addToCart({ ...cart, [item.id]: cart[item.id] + 1 })
                      );
                    } else dispatch(addToCart({ ...cart, [item.id]: 1 }));
                  }}
                >
                  Add to Cart
                </div>
              ) : (
                <div className="flex-row">
                  <div
                    style={{
                      backgroundColor: "#503E9D",
                      padding: 10,
                      marginTop: 4,
                      borderRadius: 8,
                      color: "white",
                    }}
                    onClick={() => {
                      dispatch(
                        addToCart({ ...cart, [item.id]: cart[item.id] - 1 })
                      );
                    }}
                  >
                    -
                  </div>
                  <div
                    style={{
                      border: "1px solid",
                      borderRadius: 6,
                      margin: "0px 10px",
                      width: 50,
                      textAlign: "center",
                      padding: 10,
                    }}
                  >
                    {cart[item.id]}
                  </div>
                  <div
                    style={{
                      backgroundColor: "#503E9D",
                      padding: 10,
                      marginTop: 4,
                      borderRadius: 8,
                      color: "white",
                    }}
                    onClick={() => {
                      dispatch(
                        addToCart({ ...cart, [item.id]: cart[item.id] + 1 })
                      );
                    }}
                  >
                    +
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Menu;

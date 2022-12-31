import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { menuAPI } from "../../utils/api";
import { addToCart, clearCart } from "../../redux/action";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [orderList, setOrderLists] = useState([]);

  useEffect(() => {
    fetch(menuAPI)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        let filterList = res.menu;
        setList(filterList);
        let temp = 0;
        let tempOrderLists = [];
        res.menu.forEach((item) => {
          if (cart[item.id]) {
            temp += cart[item.id] * item.itemCost;
            tempOrderLists.push({
              ...item,
              itemCost: cart[item.id] * item.itemCost,
              itemCount: cart[item.id],
            });
          }
        });
        setOrderLists(tempOrderLists);
        setTotal(temp);
      });
  }, []);

  return loading ? (
    <div>Please wait! Cart List is loading...</div>
  ) : (
    <div className="container">
      <h1>Cart List</h1>

      <div className="">
        {list.map((item) => {
          return cart[item.id] ? (
            <div key={item.id} className="restaurant-card flex-row">
              <img
                className="mb-10 br-10 min-h-176"
                alt="dishImage"
                src={item.itemPhoto}
                width={220}
                height={120}
                style={{
                  minHeight: 120,
                  minWidth: 220,
                }}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://bookmychefs.com/uploads/dish/default_food.jpg";
                }}
              />
              <div style={{ margin: 20, minWidth: 200 }}>
                <div className="itemName">{item.itemName}</div>
                <div className="itemCost">{`$${
                  cart[item.id] ? cart[item.id] * item.itemCost : item.itemCost
                }`}</div>
              </div>
              <div className="flex-row" style={{ height: 50 }}>
                <div
                  style={{
                    backgroundColor: "#503E9D",
                    padding: 10,
                    marginTop: 4,
                    borderRadius: 8,
                    color: "white",
                  }}
                  onClick={() => {
                    if (cart[item.id])
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
            </div>
          ) : null;
        })}
      </div>

      {total === 0 ? (
        <div> No item in Cart </div>
      ) : (
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-around",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          <div
            className="main-button"
            onClick={() => {
              dispatch(clearCart());
              setTotal(0);
              alert("Order Place Successfully!");
              let orderLocal = localStorage.getItem("orderList");
              localStorage.setItem(
                "orderList",
                orderLocal
                  ? JSON.stringify([...JSON.parse(orderLocal), orderList])
                  : JSON.stringify([orderList])
              );
            }}
          >
            Place Order
          </div>
          <div>Total Price : {total} </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

import { useEffect, useState } from "react";

function Order() {
  const [orderList, setOrderLists] = useState([]);

  useEffect(() => {
    let orderLocal = localStorage.getItem("orderList");
    setOrderLists(JSON.parse(orderLocal));
  }, []);

  return (
    <div className="container">
      <h1>Orders List</h1>

      <div className="">
        {orderList.map((orders, index) => {
          return (
            <div>
              <div>Order Id #02023{index + 1}</div>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  padding: 5,
                  margin: "10px 20px",
                  overflow: "scroll",
                }}
              >
                {orders.map((item) => (
                  <div key={item.id} className="restaurant-card flex-row">
                    <img
                      className="br-10 min-h-176"
                      alt="dishImage"
                      src={item.itemPhoto}
                      width={110}
                      height={60}
                      style={{
                        minHeight: 60,
                        minWidth: 110,
                      }}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          "https://bookmychefs.com/uploads/dish/default_food.jpg";
                      }}
                    />
                    <div style={{ margin: "5px 20px", minWidth: 200 }}>
                      <div className="itemName">{item.itemName}</div>
                      <div className="itemCost">{`$${item.itemCost}`}</div>
                    </div>
                    <div className="flex-row" style={{ height: 50 }}>
                      <div
                        style={{
                          width: 50,
                          height: 20,
                          margin: "0px 10px",
                          padding: 5,
                        }}
                      >
                        Count:
                      </div>
                      <div
                        style={{
                          border: "1px solid",
                          borderRadius: 6,
                          margin: "0px 10px",
                          padding: 5,
                          width: 50,
                          height: 20,
                          textAlign: "center",
                        }}
                      >
                        {item.itemCount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Order;

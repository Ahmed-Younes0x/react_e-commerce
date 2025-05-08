import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/slice/cart_slice";
function Cart() {
  const [listofitems, setListofitems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //   lab_4
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  let totalprice = 0;
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "handled");
      });
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const cartProducts = products
        .map((p) => {
          let xc = cartItems.find((item) => {
            return p.id == item.product.id;
          });

          if (xc) {
            return { product: p, count: xc.count };
          }
        })
        .filter((e) => e);

      setListofitems(cartProducts);
    }
  }, [cartItems, products]);

  listofitems.forEach((item) => {

    totalprice += item.product.price * item.count;
  });

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    setListofitems(listofitems.filter((item) => id != item.product.id));
  };
  const handlecalear = () => {
    dispatch(clearCart());
    setListofitems([]);
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {listofitems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {listofitems.map((item) => (
              <li key={item.product.id} className="cart-item">
                <div className="item-info">
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    width="50"
                    height="50"
                  />
                  <div>
                    <h4>{item.product.title}</h4>
                    <p>${item.product.price.toFixed(2)}</p>
                    <h4>X {item.count}</h4>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.product.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between">
            <h3>Total: ${totalprice.toFixed(2)}</h3>
            <button className="btn btn-warning" onClick={handlecalear}>
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

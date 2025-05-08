import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/cart_slice.js";
function P_details() {
  const [product, Setproduct] = useState();
  const [orderitems, Setorderitems] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();

  console.log(import.meta.env.APP_API_BASE_URL);
`${import.meta.env.VITE_APP_API_BASE_URL}/products`
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/products/${params.id}`).then((res) => {
      Setproduct(res.data);
    });
  }, [params.id]);
  return (
    <>
      <h2>product Info</h2>
      <hr />

      <div className="row row-cols-2 g-4">
        <div className="col">
          <div className="h-75">
            <img
              src={product?.images[0]}
              className="card-img-top"
              alt={product?.title}
              onClick={() => redirectToDetails(product?.id, product?.title)}
            />
          </div>
        </div>
        <div className="col justify-content-start">
          <div className="card mb-3 border-0">
            <div className="card-body border-0">
              {" "}
              {product?.stock === 0 ? (
                <span className="badge text-bg-warning text-center">
                  Out of Stock
                </span>
              ) : (
                <span className="badge text-bg-success text-center">
                  In Stock
                </span>
              )}
              <h5 className="card-title fw-bold border-0">{product?.title}</h5>
              <p className="card-text border-0">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div
            className="progress"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar text-bg-warning"
              style={{ width: product?.rating * 20 + "%" }}
            ></div>
          </div>

          <div className="h-75 d-flex flex-column">
            <div className="mb-3">
              <h4 className="fw-bold">
                ${product?.price?.toFixed(2)}{" "}
                {product?.discountPercentage && (
                  <small className="text-danger text-decoration-line-through">
                    $
                    {(
                      product?.price +
                      (product?.price * product?.discountPercentage) / 100
                    ).toFixed(2)}
                  </small>
                )}
              </h4>
              {product?.discountPercentage && (
                <span className="badge text-bg-success">
                  {product?.discountPercentage}% OFF
                </span>
              )}
            </div>

            <div className="mt-auto">
              <div className="btn-group mb-4" role="group">
                <button
                  className="btn btn-outline-danger bg-danger text-light"
                  onClick={() => Setorderitems(orderitems - 1)}
                  disabled={orderitems <= 0}
                >
                  -
                </button>
                <span className="p-2 px-3 text-bottom">{orderitems}</span>
                <button
                  className="btn btn-outline-success bg-success text-light"
                  onClick={() => Setorderitems(orderitems + 1)}
                  disabled={orderitems >= 10}
                >
                  +
                </button>
              </div>
              {product?.stock < 20 ? (
                <span className="badge fs-6 fw-bold text-black">
                  Only{" "}
                  <span className="fw-bolder fs-6 text-danger text-decoration-underline">
                    {product?.stock} Items
                  </span>{" "}
                  left!
                </span>
              ) : (
                <span className="badge fs-6 text-black">
                  {product?.stock} left in stock
                </span>
              )}

              <div className="d-flex justify-content-start gap-3">
                <button
                  className="btn btn-success text-light"
                  onClick={() => Buy(product?.id)}
                >
                  Buy Now
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    dispatch(addItem({ product: product, count: orderitems }));
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default P_details;

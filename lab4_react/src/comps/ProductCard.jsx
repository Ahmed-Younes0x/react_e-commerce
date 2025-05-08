import React from "react";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addItem, clearCart } from "../redux/slice/cart_slice";

export default function ProductCard({ Item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToDetails = (ID, name) => {
    console.log("ID", ID);
    navigate(`/p_details/${ID}?name=${name}`);
  };

  return (
    <div className="card h-100">
      <img
        src={Item.images[0]}
        className="card-img-top"
        alt={Item.title}
        onClick={() => redirectToDetails(Item.id, Item.title)}
      />
      <div className="card-body text-center">
        {/* {recipeItem.prepTimeMinutes <= 10 && <span class="badge text-bg-success">Easy to go</span>} */}
        {Item.stock == 0 ? (
          <span className="badge text-bg-warning text-center">Out of Stock</span>
        ) : (
          <span className="badge text-bg-success text-center">In Stock</span>
        )}
        <Link to={`/p_details/${Item.id}`}>
          <h5 className="card-title text-center">{Item.title}</h5>
        </Link>
      </div>
      <div className="card-footer d-flex flex-row-reverse">
        <button
          className="mx-2 btn btn-warning"
          onClick={() => dispatch(addItem({ product: Item, count: 1 }))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

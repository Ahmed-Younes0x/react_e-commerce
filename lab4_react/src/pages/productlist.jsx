import axios from "axios";
import ProductCard from "../comps/ProductCard";
import { useState, useEffect } from "react";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_BASE_URL}/products`, {
        params: {
          limit: 10,
        },
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err, "handeled"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h2>product list</h2>
      <hr />
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((pro) => {
          return (
            <div className="col" key={pro.id}>
              <ProductCard Item={pro} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;

import Cart from "./cart_page";
import P_details from "./p_details_page";
import ProductList from "./productlist";
import NotFound from "./NotFound";
import LayoutWithHeader from "../comps/LayoutWithHeader";
import { Routes, Route } from "react-router-dom";

export default function RoutesList() {
    return (
      <Routes>
        <Route element={<LayoutWithHeader />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/P_details/:id" element={<P_details />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
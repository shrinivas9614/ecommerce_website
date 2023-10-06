import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Customer/Pages/HomePage";
import Navigation from "../Customer/Componants/Navigation/Navigation";
import Cart from "../Customer/Componants/Cart/Cart";
import Footer from "../Customer/Componants/Footer/Footer";
import Products from "../Customer/Componants/Product/Products";
import OrderSummery from "../Customer/Componants/Checkout/OrderSummery";
import ProductsDitails from "../Customer/Componants/productDitails/ProductsDitails";
import CheckOut from "../Customer/Componants/Checkout/CheckOut";
import Order from "../Customer/Componants/Order/Order";
import OrderDetails from "../Customer/Componants/Order/OrderDetails";
const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<HomePage />} />
          <Route path="/register" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/:lavelOne/:lavelTwo/:lavelThree"
            element={<Products />}
          />
          <Route path="/product/:productId" element={<ProductsDitails />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/:orderID" element={<OrderDetails />} />
        </Routes>
      </>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;

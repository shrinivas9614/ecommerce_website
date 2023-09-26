import "./App.css";
import CheckOut from "./Customer/Componants/Checkout/CheckOut";
import Footer from "./Customer/Componants/Footer/Footer";
import Cart from "./Customer/Componants/Cart/Cart";
import Navigation from "./Customer/Componants/Navigation/Navigation";
import ProductsDitails from "./Customer/Componants/productDitails/ProductsDitails";
import Products from "./Customer/Componants/Product/Products";
import HomePage from "./Customer/Pages/HomePage";
import Order from "./Customer/Componants/Order/Order";
import OrderDetails from "./Customer/Componants/Order/OrderDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
      </Routes>

      <div></div>
    </div>
  );
}

export default App;

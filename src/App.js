import "./App.css";
import CheckOut from "./Customer/Componants/Checkout/CheckOut";
import Footer from "./Customer/Componants/Footer/Footer";
// import Cart from "./Customer/Componants/Cart/Cart"
import Navigation from "./Customer/Componants/Navigation/Navigation";
// import ProductsDitails from "./Customer/Componants/productDitails/ProductsDitails";
// import Products from "./Customer/Componants/Product/Products";
// import HomePage from "./Customer/Pages/HomePage";
function App() {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Products /> */}
        {/* <ProductsDitails /> */}
        {/* <Cart /> */}
        <CheckOut />
      </div>
      <Footer />
    </div>
  );
}

export default App;

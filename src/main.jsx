import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//product provide
import ProductProvide from "./context/ProductContext";
//sidebar provide
import SidebarProvide from "./context/SidebarContext";
//cart context
import CartProvide from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvide>
    <CartProvide>
      <ProductProvide>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvide>
    </CartProvide>
  </SidebarProvide>
);

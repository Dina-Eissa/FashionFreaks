import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { CartProvider } from "./components/CartContext";

const App = () => {
  return (
    <ChakraProvider>
      <CartProvider>
        <Navbar />
        <Header />
        <ProductList />
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;

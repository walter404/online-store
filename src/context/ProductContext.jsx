import React, { createContext, useState, useEffect} from 'react';
//create context
export const ProductContext = createContext();

const ProductProvide = ({children}) => {
  //product state

  const [products, setProducts] = useState([]);
  //fetch product
  useEffect(()=> {
    const fetchProducts = async ()=> {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [])

  //fetch json product


  return (<ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>)
  
}

export default ProductProvide;
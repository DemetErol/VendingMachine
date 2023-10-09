
import React from "react";
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Insert from './components/Insert';
import Product from './components/Product';
import Supplier from './components/Supplier';
import { loadProducts } from './components/api';


function App() {

  const [money, setMoney] = useState(0.0)
  const [products, setProducts] = useState([])


  useEffect(() => {
    async function getProducts() {
      const response = await loadProducts();
      setProducts(response.data)

    }
    getProducts();
  }, [])

  return (
    <>
    
    <div>     
    
      <Header money={money} />
      <Insert setMoney={setMoney} money={money} />
      

     

      {products.map(product => (
        
       
        <Product product={product} money={money} setMoney={setMoney} key={product.id} />
       
      ))}

    </div>
    </>
   
  );
}

export default App;

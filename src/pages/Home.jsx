import React, {useContext} from 'react';
//ipmort product context
import { ProductContext } from '../context/ProductContext';
//import components 
import Product from '../component/Product';
import Hero from '../component/Hero';

function Home() {
  //get products from product context
  const {products} = useContext(ProductContext);
  //get only men and women clothing category
  const filteredProducts = products.filter((item) => {
    return (item.category === "men's clothing" || item.category === "women's clothing");
  });
  return (
    <div>
      <Hero/>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map(product => {
              return (
                <Product product={product} key={product.id} />
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
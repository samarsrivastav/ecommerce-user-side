import { useEffect, useState } from "react";
import { ProductCard } from "../Products/ProductCard";
import { getProduct } from "../../../data/productsApi";

export const Product = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      const response=await getProduct()
      if(response.status==200){
        setProducts(response.data.result)
      }
    }
    fetchData()
  },[])
  return (
    <div className="my-10 bg-white" id="products">
      <div className="heading text-2xl p-5 font-bold font-mono text-center">
        Product For You
      </div>
      
      <div className="card-item grid md:grid-cols-3 grid-cols-1 w-[90%] mx-auto my-3">
        {products.length > 0 ? (
          products.slice(0,3).map(item => (
            //@ts-ignore
            <ProductCard item={item} key={item.id} />
          ))
        ) : (
          <div className="flex items-center justify-center col-span-full p-5">
            <div className="text-center text-gray-500">
              No products available at the moment.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

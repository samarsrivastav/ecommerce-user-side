import { useEffect, useState } from "react";
import { ProductCard } from "./subComp/Products/ProductCard";
import { getProduct } from "../data/productsApi";
import { Pagination } from "./subComp/Products/Pagination";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProduct();
      if (response.status === 200) {
        setProducts(response.data.result);
      }
    };
    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="my-10 bg-white" id="products">
      <div className="heading text-2xl p-5 font-bold font-mono text-center">
        Products For You
      </div>
      
      <div className="card-item grid md:grid-cols-3 grid-cols-1 w-[90%] mx-auto my-3">
        {currentProducts.length > 0 ? (
          currentProducts.map(item => (
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={nextPage}
        onPrev={prevPage}
      />
    </div>
  );
};

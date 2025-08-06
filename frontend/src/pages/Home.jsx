import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParms] = useSearchParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/products?" + searchParams)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, [searchParams]);

  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>
      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}

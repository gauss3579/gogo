import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { filterContext, productsContext } from "../App";
import Product from "../components/Product";
import ProductForm from "../components/ProductForm";

function ProductListPage() {
  const [products, setProducts] = useContext(productsContext);
  const [filtered, setFilted] = useState(products);
  const [filterI] = useContext(filterContext);

  useEffect(() => {
    setFilted(
      products.filter(
        (o) => o.name.includes(filterI) || String(o.price).includes(filterI)
      )
    );
  }, [products, filterI]);

  const onDelete = (id) =>
    setProducts(products.filter((producto) => producto.id !== id));

  const onAdd = (product) => setProducts(products.concat(product));

  return (
    <>
      {filtered.map((product, i) => (
        <Product {...product} key={product.id} delete={onDelete} />
      ))}

      <ProductForm onSubmit={onAdd} value="" />
    </>
  );
}

export default ProductListPage;

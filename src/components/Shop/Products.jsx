import ProductItem from "./ProductItem";
import { DUMMY_PRODUCTS } from "../../utils/products";

const Products = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-center text-sky-700 text-2xl md:text-3xl font-bold uppercase mb-6">
        Buy your favorite products
      </h2>
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 place-items-center w-full max-w-6xl">
          {DUMMY_PRODUCTS.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;

import { useState, useEffect } from "react";

import { filterProducts } from "@/utils/filterProducts";
import { FilterSelect } from "@/components/ui/FilterSelect";
import { CardItem } from "@/components/ui/CardItem";

interface ProductSectionProps {
  products: Product[];
}

export const ProductSection = ({ products }: ProductSectionProps) => {
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    rating: "",
    stock: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const result = filterProducts(products, filters);
    setFilteredProducts(result);
  }, [filters]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <>
      {/* Filter Section */}
      <section className="flex items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          <div className="flex flex-wrap justify-center gap-4">
            <FilterSelect
              placeholder="All Category"
              options={Array.from(
                new Set(products.map((product) => product.category)),
              ).map((category) => ({
                label: category,
                value: category,
              }))}
              onChange={(value) => handleFilterChange("category", value)}
            />

            <FilterSelect
              placeholder="All Price"
              options={[
                { label: "Lowest Price", value: "low" },
                { label: "Highest Price", value: "high" },
              ]}
              onChange={(value) => handleFilterChange("price", value)}
            />

            <FilterSelect
              placeholder="All Rating"
              options={[
                { label: "⭐⭐⭐⭐⭐", value: "5" },
                { label: "⭐⭐⭐⭐", value: "4" },
                { label: "⭐⭐⭐", value: "3" },
                { label: "⭐⭐", value: "2" },
                { label: "⭐", value: "1" },
              ]}
              onChange={(value) => handleFilterChange("rating", value)}
            />

            <FilterSelect
              placeholder="All Stock"
              options={[
                { label: "In Stock", value: "available" },
                { label: "Out of Stock", value: "sold-out" },
              ]}
              onChange={(value) => handleFilterChange("stock", value)}
            />
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="flex flex-wrap justify-center gap-3 p-4 md:gap-9 md:px-16 xl:gap-14 xl:px-52">
        {filteredProducts.map((product) => (
          <CardItem
            key={product.id}
            data={product}
            addToCartLabel="Add to Cart"
            buyNowLabel="Buy Now"
            onAddToCartClick={(item) => {
              console.log("Tambah ke keranjang:", item);
            }}
            onBuyNowClick={(item) => {
              console.log("Beli sekarang:", item);
            }}
          />
        ))}
      </section>
    </>
  );
};

import { useState, useMemo } from "react";

function useFilteredProducts(products) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;

    const term = searchTerm.toLowerCase();
    return products.filter((game) =>
      game.name.toLowerCase().includes(term)
    );
  }, [products, searchTerm]);

  return { searchTerm, setSearchTerm, filteredProducts };
}

export default useFilteredProducts;
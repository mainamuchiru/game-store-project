// hooks/useProducts.js

import { useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  // 👇 ADD THIS
} from "../services/productService";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  async function createProduct(product) {
    const newProduct = await addProduct(product);
    setProducts([...products, newProduct]);
  }

  async function removeProduct(id) {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  }

  // ✅ ADD THIS WRAPPER
  async function editProduct(id, updatedData) {
    const updated = await updateProduct(id, updatedData);

    setProducts(
      products.map((p) =>
        p.id === id ? updated : p
      )
    );

    return updated;
  }

  return {
    products,
    createProduct,
    removeProduct,

    // ✅ expose it here
    editProduct,
  };
}
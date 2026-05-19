// hooks/useProducts.js

import { useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  deleteProduct,
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

  return {
    products,
    createProduct,
    removeProduct,
  };
}
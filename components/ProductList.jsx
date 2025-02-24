'use client'
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import RemoveProductBtn from "./removeProductBtn";

const fetchProducts = async () => {
  try {
    const { data } = await axios.get("/api/product"); // ✅ Extract data correctly
    console.log(data);
    return data; // ✅ Returning actual data
  } catch (error) {
    console.error("Axios error, products fetching error:", error.response?.data || error.message);
    return []; // ✅ Return empty array to prevent crashing
  }
};

const ProductList = () => {
  const [products, setProducts] = useState([]); // ✅ Store data in state

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}> {/* ✅ Corrected JSX */}
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td colSpan={2} className="flex flex-wrap gap-5 justify-center items-center">
                <Link href={`/editProduct/${product._id}`}>
                  <PencilSquareIcon className="w-5 h-5" />
                </Link>

                <RemoveProductBtn id={product._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
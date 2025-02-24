"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Edit({ id, name, brand, price, quantity }) {
  const [newName, setNewName] = useState(name);
  const [newBrand, setNewBrand] = useState(brand);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName, 
          brand: newBrand,
          price: newPrice,
          quantity: newQuantity,
        }),
      });

      const data = await res.json(); // ✅ Handle API response

      if (!res.ok) {
        throw new Error(data.message || "Failed to update product");
      }

      console.log("Product updated:", data); // ✅ Debugging response
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-56 mx-auto pt-20">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
        required
      />

      <input
        onChange={(e) => setNewBrand(e.target.value)}
        value={newBrand}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Brand"
        required
      />

      <input
        onChange={(e) => setNewPrice(e.target.value)}
        value={newPrice}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Price"
        min={0}
        required
      />

      <input
        onChange={(e) => setNewQuantity(e.target.value)}
        value={newQuantity}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Quantity"
        min={0}
        required
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit" type="submit">
        Update Product
      </button>
    </form>
  );
}
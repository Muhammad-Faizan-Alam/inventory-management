"use client"; // Ensure it's a Client Component

import { TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useRouter } from "next/navigation"; // ✅ Use from "next/navigation"

const RemoveProductBtn = ({ id }) => {
  const router = useRouter();

  const removeProduct = async () => {
    try {
      if (window.confirm("Are you sure?")) {
        const response = await axios.delete(`/api/product?id=${id}`);
        console.log("Product deleted successfully:", response.data);
        // if (response.status === 200) {
        //   router.push("/"); // Redirect to home or product list page
        //   setTimeout(() => router.refresh(), 1000); // Refresh after a slight delay
        // }
        router.refresh(); // ✅ Refresh the page after deletion
        router.push("/");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <button onClick={removeProduct}>
      <TrashIcon className="w-5 h-5 text-red-500" />
    </button>
  );
};

export default RemoveProductBtn;
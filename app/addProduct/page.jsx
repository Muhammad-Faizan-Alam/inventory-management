// "use client";
// import { useState, useActionState } from "react";
// import axios from "axios";

// async function submitProduct(prevState, formData) {
//     const productData = {
//       name: formData.get("name"),
//       brand: formData.get("brand"),
//       price: formData.get("price"),
//       quantity: formData.get("quantity"),
//     };
  
//     try {
//       const response = await axios.post("/api/product", productData);
//       return { success: true, message: "Product added successfully!", data: response.data };
//     } catch (error) {
//       return { success: false, message: "Error adding product", error: error.message };
//     }
//   }

// const ProductForm = () => {
//     const [state, formAction] = useActionState(submitProduct, null);
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-[600px] p-6 bg-white shadow-lg rounded-2xl flex">
//         {/* Form Section */}
//         <div className="w-1/2 p-4">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Product</h2>
//           <form className="space-y-4" action={formAction}>
//             <input
//               type="text"
//               placeholder="Product Name"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Brand"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
//               required
//             />
//             <input
//               type="number"
//               placeholder="Price"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
//               required
//               min={0}
//             />
//             <input
//               type="number"
//               placeholder="Quantity"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
//               required
//               min={0}
//             />
//             <button className="w-full p-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition" type="submit">Submit</button>
//           </form>
//         </div>

//         {/* Decorative Section */}
//         <div className="w-1/2 flex justify-center items-center bg-gradient-to-br from-purple-500 to-emerald-500 rounded-r-2xl">
//           <h2 className="text-white text-xl font-bold text-center font-mono">ZER0.D0T</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductForm;

"use client";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

async function submitProduct(prevState, formData) {
  const productData = {
    name: formData.get("name"),
    brand: formData.get("brand"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
  };

  try {
    const response = await axios.post("/api/product", productData);
    return { success: true, message: "Product added successfully!", data: response.data };
  } catch (error) {
    return { success: false, message: "Error adding product", error: error.message };
  }
}

const ProductForm = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(async (prevState, formData) => {
    const result = await submitProduct(prevState, formData);
    
    if (result.success) {
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }

    return result;
  }, { success: null });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-2xl flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Product</h2>
          <form className="space-y-4" action={formAction}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
              min={0}
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
              min={0}
            />
            <button
              className="w-full p-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition"
              type="submit"
            >
              Submit
            </button>
          </form>

          {/* Success/Error Messages */}
          {state.success !== null && (
            <p className={`mt-3 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>
              {state.message}
            </p>
          )}
        </div>

        {/* Decorative Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gradient-to-br from-purple-500 to-emerald-500 rounded-2xl md:rounded-r-2xl md:rounded-l-none mt-6 md:mt-0">
          <h2 className="text-white text-xl font-bold text-center font-mono">ZER0.D0T</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
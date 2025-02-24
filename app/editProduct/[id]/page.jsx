import Edit from "@/components/Edit";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function editProduct({ params }) {
  const { id } = await params;
  const { product } = await getProductById(id);
  const { name, brand, price, quantity } = product;

  return <Edit id={id} name={name} brand={brand} price={price} quantity={quantity} />;
}
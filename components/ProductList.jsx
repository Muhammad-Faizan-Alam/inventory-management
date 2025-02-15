import { PencilSquareIcon } from "@heroicons/react/24/outline";

const ProductList = () => {
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
          <tr>
            <td>Product 1</td>
            <td>Brand A</td>
            <td>$100</td>
            <td>10</td>
            <td colSpan={2}>R | D</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>Brand B</td>
            <td>$150</td>
            <td>5</td>
            <td colSpan={2}>
            <PencilSquareIcon className="w-5" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
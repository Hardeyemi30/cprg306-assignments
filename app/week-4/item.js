export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white shadow-md rounded-lg p-4 mb-3 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Quantity: {quantity}</p>
      <p className="text-sm text-gray-500">Category: {category}</p>
    </li>
  );
}
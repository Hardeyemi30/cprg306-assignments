export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white  p-4 mb-3 border border-green-200">
      <h2 className="text-lg font-semibold text-green-800">{name}</h2>
      <p className="text-blue-600">Quantity: {quantity}</p>
      <p className="text-sm text-green-500">Category: {category}</p>
    </li>
  );
}
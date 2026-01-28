export default function Item({name, quantity, category}) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm mb-2">
      <div>
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">Category: {category}</p>
      </div>
      <span className="text-sm font-medium text-gray-700">
        Qty: {quantity}
      </span>
    </li>
  );
};



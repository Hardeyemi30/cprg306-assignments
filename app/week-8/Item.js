export default function Item({ item, onSelect }) {
  return (
    <li
      onClick={() => onSelect(item)}
      className="p-3 bg-white cursor-pointer  text-black"
    >
      <h2 className="font-semibold">{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </li>
  );
}
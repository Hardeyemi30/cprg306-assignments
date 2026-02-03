import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  return (
    <ul className="max-w-md mx-auto">
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
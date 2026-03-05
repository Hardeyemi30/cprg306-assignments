import Item from "../week-4/item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = Array.isArray(items)
    ? [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else {
          return a.category.localeCompare(b.category);
        }
      })
    : [];

  return (
    <div className="w-full max-w-md mt-6">
      <div className="mb-4 flex gap-4">
        <button
          onClick={() => setSortBy("name")}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

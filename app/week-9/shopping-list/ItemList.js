"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items, onItemSelect }) {
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
    <div className="mt-6">

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className="bg-green-500 text-white px-3 py-2 rounded"
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}
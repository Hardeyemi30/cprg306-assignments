"use client";

import { useState } from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import itemsData from "../week-4/items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0]
      .replace(/[^\w\s]/gi, "")
      .trim();

    setSelectedItemName(cleanName);
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
      <div className="flex gap-20">
        <ItemList items={items} onItemSelect={handleItemSelect} />

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

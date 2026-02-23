"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "../week-4/itemList";
import itemsData from "../week-4/items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Shopping List
      </h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} />
    </main>
  );
}
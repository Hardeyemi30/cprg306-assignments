"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import itemsData from "../week-4/items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-green-500 p-6">
      <h1 className="text-3xl font-bold text-black text-center mb-6">
        Shopping List
      </h1>

      <div className="flex  text-black flex-col items-center gap-6">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
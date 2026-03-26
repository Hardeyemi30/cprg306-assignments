"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    if (!ingredient) return;

    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-3">
        Meal Ideas using {ingredient}
      </h2>

      <ul className="list-disc ml-6 position-absolute" >
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
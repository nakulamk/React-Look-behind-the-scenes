import React, { Fragment } from "react";
// import { useState } from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
import AvailableMeals from "./Components/Meals/AvailableMeals";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </Fragment>
  );
}

export default App;

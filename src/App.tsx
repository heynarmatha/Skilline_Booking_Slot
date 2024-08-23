// App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookSlot from "./components/bookSlot/bookSlot";
import LandingScreen from "./components/landingScreen/landingScreen";
import "./App.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingScreen />,
    },
    {
      path: "/bookSlot",
      element: <BookSlot />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

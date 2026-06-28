import React from "react";
import { Header } from "./components/Header/Header";
import CombinationPage from "./pages/CombinationPage/CombinationPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentKey="combination" />
      <main className="pt-16 py-6">
        <CombinationPage />
      </main>
    </div>
  );
};

export default App;

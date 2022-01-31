import React from "react";
import { Board } from "./components/Board";
import { Layout } from "./components/Layout";

const App: React.VFC = () => {
  return (
    <div className="w-full h-full">
      <Layout>
        <Board />
      </Layout>
    </div>
  );
};

export default App;

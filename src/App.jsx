import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default App;

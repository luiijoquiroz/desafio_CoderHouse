import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Main, Footer } from "./components";
import { routes } from "./routes";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Main>
      <Footer />
    </div>
  );
};

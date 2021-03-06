import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Footer, Banner } from "./components";
import { routes } from "./routes";

// En desarrollo
// Todo: habilitar uso de rutas
export const App = () => {
  return (
    <div className="App">
      <Banner />
      {/* <Main>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Main>*/}
      <Footer />
    </div>
  );
};

// git rm -r --cached .gs

// git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/assets/videos/BJJ.mp4'

// git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch public/videos/Demo.mp4'

import React from "react";
import AppRoutes from "./routes"; 

// En desarrollo
export const App = () => {
  console.log(`[App] Start:  ${Date()}`)
  return (
    <div className="App">
        <AppRoutes />
    </div>
  );
};


// git rm -r --cached .gs
// git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/assets/videos/BJJ.mp4'
// git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch public/videos/Demo.mp4'

/* <Main>
  <Routes>
    {routes.map((route) => (
      <Route key={route.id} path={route.path} element={route.component} />
    ))}
  </Routes>
</Main>*/
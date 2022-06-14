import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import {
  PageHome,
  PageDisciplinas,
  PageQuienesSomos,
  PageServicios,
} from "./pages";

const routes = [
  {
    id: 1,
    name: "home",
    path: "/",
    private: false,
    exact: true,
    element: <PageHome />,
    // element: ()=> <h1>Hola Mundo</h1>,
  },
//   {
//     id: 2,
//     name: "disciplinas",
//     path: "/disciplinas",
//     private: false,
//     element: <PageDisciplinas />,
//   },
//   {
//     id: 3,
//     name: "quienes-somos",
//     path: "/quienes-somos",
//     private: false,
//     element: <PageQuienesSomos />,
//   },
//   {
//     id: 4,
//     name: "servicios",
//     path: "/servicios",
//     private: false,
//     element: <PageServicios />,
//   },
];

const AppRoutes = () => {
  console.log(`[AppRoutes] before  routes:  ${Date()}`)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PageHome />} />
{/*         
        {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
        ))} */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
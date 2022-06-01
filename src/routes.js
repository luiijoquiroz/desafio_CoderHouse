import {
  PageHome,
  PageNosotros,
  PageQuienesSomos,
  PageServicios,
} from "./pages";

export const routes = [
  {
    id: 1,
    name: "home",
    path: "/",
    private: false,
    component: <PageHome />,
  },
  {
    id: 1,
    name: "nosotros",
    path: "/nosotros",
    private: false,
    component: <PageNosotros />,
  },
  {
    id: 1,
    name: "quienes-somos",
    path: "/quienes-somos",
    private: false,
    component: <PageQuienesSomos />,
  },
  {
    id: 1,
    name: "servicios",
    path: "/servicios",
    private: false,
    component: <PageServicios />,
  },
];

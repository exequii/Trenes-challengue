import { Home } from "./components/Home";
import Tren from "./components/Tren";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/api-trenes',
    element: <Tren />
  }
];

export default AppRoutes;

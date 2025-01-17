import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// define routes
const routes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>,
);
const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

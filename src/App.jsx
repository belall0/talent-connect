import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';

const App = () => {
  // define routes
  const routes = createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  );
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BorderPages from './pages/BorderPages';
// import UnitPages from './pages/UnitPages';
import { useEffect } from 'react';
import IntersectionObservePages from './pages/IntersectionObservePages';
// require.context

const router = createBrowserRouter([
  {
    path: '/UnitPages',
    element: await import('./pages/UnitPages'),
  },
  {
    path: '/BorderPages',
    element: <BorderPages>22</BorderPages>,
  },
  {
    path: '/IntersectionObservePages',
    element: <IntersectionObservePages>22</IntersectionObservePages>,
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);
function App() {
  useEffect(() => {
    console.log(`app init`);
  }, []);
  return <RouterProvider router={router} />;
}

export default App;

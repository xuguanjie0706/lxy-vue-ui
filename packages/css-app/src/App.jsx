import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BorderPages from './pages/BorderPages';
// import UnitPages from './pages/UnitPages';
import { useEffect } from 'react';
import 'virtual:windi.css';
import HeaderPages from './pages/HeaderPages';
import IntersectionObservePages from './pages/IntersectionObservePages';
import SkillPages from './pages/SkillPages';
import './styles/common.scss';
// require.context

const router = createBrowserRouter([
  {
    path: '/UnitPages',
    element: await import('./pages/UnitPages'),
  },
  {
    path: '/HeaderPages',
    element: <HeaderPages>22</HeaderPages>,
  },
  {
    path: '/SkillPages',
    element: <SkillPages>22</SkillPages>,
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

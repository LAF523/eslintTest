import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
// import { Navigate } from 'react-router-dom';

function Loading(Element: React.FC) {
  return (
    <Suspense fallback={<Spin />}>
      <Element />
    </Suspense>
  );
}

const Layout = Loading(lazy(() => import('../layouts/BaseLayout')));
const Page1 = Loading(lazy(() => import('../pages/Page1')));
const Page2 = Loading(lazy(() => import('../pages/Page2')));
const NotFound = Loading(lazy(() => import('../pages/NotFound')));
const router = [
  {
    path: '/',
    element: Layout,
    children: [
      {
        path: '/page1',
        element: Page1,
        children: [
          {
            path: '/page1/test',
            element: NotFound
          }
        ]
      },
      {
        path: '/page2',
        element: Page2
      },
      {
        path: '*',
        element: NotFound
      }
    ]
  }
];

export default router;

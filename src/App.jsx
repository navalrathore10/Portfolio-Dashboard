import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToggleProvider } from './ToggleContext';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Works from './pages/Works';
import Explorations from './pages/Explorations';
import ContactMe from './pages/ContactMe';
import Development from './components/Development';
import Photography from './components/Photography';
import Designing from './components/Designing';


export default function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'aboutme',
          element: <AboutMe />,
        },
        {
          path: 'explorations',
          element: <Explorations />,
        },
        {
          path: 'works',
          element: <Works />,
          children: [
            {
              path: '',
              element: <Development />,
            },
            {
              path: 'Development',
              element: <Development />,
            },
            {
              path: 'Photography',
              element: <Photography />,
            },
            {
              path: 'Designing',
              element: <Designing />,
            },
          ]
        },
        {
          path: 'contactme',
          element: <ContactMe />,
        }
      ],
    }
  ]);


  return (
    <ToggleProvider>
      <RouterProvider router={routes} />
    </ToggleProvider>
  );
}
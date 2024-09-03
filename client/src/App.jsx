import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/homepage'
import Productpage from './routes/productPage/productpage';
import Contact from './routes/contact/contact';
import SinglePage from './routes/singleProductPage/singlePage';

import Login from './components/login/login';
import Register from './components/register/register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/Register",
      element: <Register />
    },
    {
      path: "/products",
      element: <Productpage />
    }, {
      path: "/contact",
      element: <Contact />
    }, {
      path: "/singlePage",
      element: <SinglePage />
    }
  ]

  );
  return <RouterProvider router={router} />;
}

export default App

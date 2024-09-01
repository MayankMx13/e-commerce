import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/homepage'
import Productpage from './routes/productPage/productpage';
import Contact from './routes/contact/contact';
import SinglePage from './routes/singleProductPage/singlePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    }, {
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

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from './routes/Contact.jsx';
import Catalogue from './routes/Catalogue.jsx';
import BuyPage from './routes/BuyPage.jsx';
import Chat from './routes/Chat.jsx'
import Register from './routes/Register.jsx';
import Agenda from './routes/Agenda.jsx';
import Home from './routes/Home.jsx';
import User from './routes/User.jsx';
import ErrorPage from './error-page.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Agenda",
    element: <Agenda />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Chat",
    element: <Chat />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Catalogue",
    element: <Catalogue />,
  },
  {
    path: "/User",
    element: <User />,
  },
  {
    path: "/BuyPage",
    element: <BuyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

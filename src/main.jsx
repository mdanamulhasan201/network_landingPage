import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';

import {

  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(

  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </StrictMode>,
  </HelmetProvider>

)

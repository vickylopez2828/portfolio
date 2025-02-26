import { StrictMode } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
    <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      toastClassName={() =>
        "relative flex p-4 rounded-md overflow-hidden bg-slate-900 text-white shadow-lg"
      }
      bodyClassName={() => "text-sm font-semibold flex items-center"}
      progressClassName="Toastify__progress-bar"
   />
  </StrictMode>,
)

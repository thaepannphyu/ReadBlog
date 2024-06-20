import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/app.css'
import { store } from './App/store'
import { Provider } from 'react-redux'

import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import Router from "./IndexRoutes";


const finalRouter=createBrowserRouter(Router);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={finalRouter}>
  
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)

import { lazy } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login'
import Layout from './components/layout/Layout';
import PublicLayout from './components/publiclayout/PublicLayout';
import { Provider } from 'react-redux';
import store from './store/store';
import EmployeeProfile from './pages/profileEmployee/profileEmployee';


const NotFound = lazy(() => import('./pages/notFound/NotFound')) 
const ListEmployees = lazy(() => import('./pages/listEmployees/ListEmployees')) 
const EmployeeDetailPage = lazy(() => import('./pages/detailEmployee/EmployeeDetailPage')) 
const ManageEmployee = lazy(() => import('./pages/manageEmployee/manageEmployee')) 



function App() {
    const router = createBrowserRouter([
         {
          path : '/',
          element : <NotFound />
        },
        {
          path : '/login',
          element : <PublicLayout children={<Login />} />
        },
        {
          path: '/employee',
          element : <Layout />,
          children: [
            {index: true, element: <ListEmployees />},
            {path : "profile", element: <EmployeeProfile />},
            {path: "create", element: <ManageEmployee />},
            {path: ":id", element: <EmployeeDetailPage />},
            {path : "edit/:id", element: <ManageEmployee />}
          ]
        }
      ]);
  return (
    <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
  )
}

export default App

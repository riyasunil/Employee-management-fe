import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login'
import NotFound from './pages/notFound/NotFound';
import Layout from './components/layout/Layout';
import ListEmployees from './pages/listEmployees/ListEmployees';
import Test from './pages/Test';
import EmployeeDetailPage from './pages/detailEmployee/EmployeeDetailPage';
import PublicLayout from './components/publiclayout/PublicLayout';
import ManageEmployee from './pages/manageEmployee/manageEmployee';


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
          path : '/test',
          element : <Test />
        },
        {
          path: '/employee',
          element : <Layout />,
          children: [
            {index: true, element: <ListEmployees />},
            {path: "create", element: <ManageEmployee />},
            {path: ":id", element: <EmployeeDetailPage />},
            {path : "edit/:id", element: <ManageEmployee />}
          ]
        }
      ]);
  return (
     <RouterProvider router={router} />
  )
}

export default App

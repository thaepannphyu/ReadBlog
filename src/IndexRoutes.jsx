import App from "./App";
import AdminCreate from "./components/dashboardComponent/adminComponents/AdminForm/AdminCreate";
import FormLayout from "./components/dashboardComponent/layouts/FormLayout";
import Admin from "./pages/adminDashboard/Admin";
import Blog from "./pages/adminDashboard/Blog";
import BlogCreate from "./components/dashboardComponent/blogComponents/blogForm/BlogCreate";
import BlogEdit from "./components/dashboardComponent/blogComponents/blogForm/BlogCreate";
import Login from "./components/dashboardComponent/authComponents/Login";
import AuthFormLayout from "./components/dashboardComponent/layouts/AuthFormLayout";
import Register from "./components/dashboardComponent/authComponents/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Category from "./pages/adminDashboard/Category";
import CategoryCreate from "./components/dashboardComponent/categoryComponents/categoryForm/CategoryCreate";
import CategoryEdit from "./components/dashboardComponent/categoryComponents/categoryForm/CategoryEdit";
import Home from "./pages/application/Home";
import DashboardLayout from "./pages/adminDashboard/DashboardLayout";

const token = localStorage.getItem("token");

if (token) {
  console.log(token);
}

const Router = [
  {
    path: "/",
    element: <App />,
    children: [
      // home routes
      {
        index:true,
        element: <Home />,
      },
    ],
  },

  // Auth routes
  {
    path: "user",
    element: <AuthFormLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // Admin Dashboard  routes
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <DashboardLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "admin",
        children: [
          {
            index: true,
            element: <Admin />,
          },
          {
            path: "create",
            element: <FormLayout title="Admin Management" />,
            children: [{ index: true, element: <AdminCreate /> }],
          },
        ],
      },
      {
        path: "blog",
        isPrivate: true,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: "create",
            element: <FormLayout title="Blog Management" />,
            children: [{ index: true, element: <BlogCreate /> }],
          },
          {
            path: ":blogId/edit",
            element: <FormLayout title="Blog Management" />,
            children: [{ index: true, element: <BlogEdit /> }],
          },
        ],
      },
      {
        path: "categories",
        isPrivate: true,
        children: [
          {
            index: true,
            element: <Category />,
          },
          {
            path: "create",
            element: <FormLayout title="Category Management" />,
            children: [{ index: true, element: <CategoryCreate /> }],
          },
          {
            path: ":categoryId/edit",
            element: <FormLayout title="Category Management" />,
            children: [{ index: true, element: <CategoryEdit /> }],
          },
        ],
      },
    ],
  },
];

export default Router;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products/Products";
import Product from "../pages/Product/Product/Product";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import DashboardMain from "../dashboard/layout/DashboardMain";
import Dashboard from "../dashboard/pages/Dashboard/Dashboard";
import MyProducts from "../dashboard/pages/MyProducts/MyProducts";
import PrivateRoute from "./PrivateRoute";
import Profile from "../dashboard/pages/Profile/Profile";
import Users from "../dashboard/pages/Users/Users";
import Categories from "../dashboard/pages/Categories/Categories";
import AddProduct from "../dashboard/pages/AddProduct/AddProduct";
import CustomerBookings from "../dashboard/pages/CustomerBookings/CustomerBookings";
import MyBookings from "../dashboard/pages/MyBookings/MyBookings";
import AdminRoute from "./AdminRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardMain />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/customer-bookings",
        element: <CustomerBookings />,
      },
      {
        path: "/dashboard/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/dashboard/categories",
        element: (
          <AdminRoute>
            <Categories />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default Router;

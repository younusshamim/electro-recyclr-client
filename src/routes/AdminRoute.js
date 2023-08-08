import React from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import HashLoading from "../components/Loader/HashLoading";
import { Stack } from "@chakra-ui/react";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, userDetails, loading } = useAuth();
  const { data: adminData, isLoading: adminLoading } = useAdmin(
    userDetails?.email
  );
  const isAdmin = adminData?.data?.isAdmin;
  const location = useLocation();

  if (loading || adminLoading) {
    return (
      <Stack h="100vh" align="center" justify="center">
        <HashLoading />
      </Stack>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate to="/login" state={{ targetUrl: location }} replace></Navigate>
  );
};

export default AdminRoute;

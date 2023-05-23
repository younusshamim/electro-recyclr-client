import React from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import HashLoading from "../components/Loader/HashLoading";
import { Stack } from "@chakra-ui/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <Stack h="100vh" align="center" justify="center">
        <HashLoading />
      </Stack>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={{ targetUrl: location }} replace></Navigate>
  );
};

export default PrivateRoute;

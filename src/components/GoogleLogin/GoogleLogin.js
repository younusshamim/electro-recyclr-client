import { Input } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { user, googleSignIn, loading } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate("/dashboard", { replace: true });
  }

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log({ result });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Input
      disabled={loading}
      value="Continue With Google"
      type="button"
      variant="outline"
      size="lg"
      cursor="pointer"
      border="1px solid black"
      mt="15px"
      onClick={handleGoogleSignIn}
    />
  );
};

export default GoogleLogin;

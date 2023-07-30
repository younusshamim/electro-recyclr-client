import { Input } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { onSaveUser } from "../../services/users-services";
import { useMutation } from "react-query";

const GoogleLogin = ({ location }) => {
  const { user, googleSignIn, loading } = useAuth();
  const navigate = useNavigate();
  const targetUrl = location.state?.targetUrl?.pathname || "/dashboard";

  if (user) {
    navigate(targetUrl, { replace: true });
  }

  const { mutate } = useMutation(onSaveUser);

  const handleGoogleSignIn = async () => {
    try {
      const {
        user: { email, displayName, photoURL },
      } = await googleSignIn();
      mutate({ name: displayName, email, img: photoURL });
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

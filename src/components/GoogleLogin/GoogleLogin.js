import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { onSaveUser } from "../../services/users-services";
import { useMutation } from "react-query";
import useToken from "../../hooks/useToken";

const GoogleLogin = ({ location }) => {
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const { Token } = useToken(loginUserEmail);

  const { user, googleSignIn, loading } = useAuth();
  const navigate = useNavigate();
  const targetUrl = location?.state?.targetUrl?.pathname || "/dashboard";

  if (Token) {
    navigate(targetUrl, { replace: true });
  }

  const { mutate } = useMutation(onSaveUser);

  const handleGoogleSignIn = async () => {
    try {
      const {
        user: { email, displayName, photoURL },
      } = await googleSignIn();
      setLoginUserEmail(email);
      mutate({ name: displayName, email, img: photoURL });
      // navigate(targetUrl, { replace: true });
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

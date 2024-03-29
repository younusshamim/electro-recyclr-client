import React, { useState } from "react";
import { Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import TextInput from "../../dashboard/components/TextInput/TextInput";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const { Token } = useToken(loginUserEmail);

  const handleForm = useForm();
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = handleForm;

  const {
    user,
    signIn,
    loading: authLoading,
    setLoading: setAuthLoading,
  } = useAuth();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  let location = useLocation();
  const targetUrl = location.state?.targetUrl?.pathname || "/dashboard";

  if (Token) {
    navigate(targetUrl, { replace: true });
  }

  const handleSignIn = async (data) => {
    try {
      await signIn(data.email, data.password);
      setLoginUserEmail(data.email);
      // navigate(targetUrl, { replace: true });
    } catch (error) {
      setLoginError(error.message);
      setAuthLoading(false);
    }
  };

  const navigateToSignUp = () => {
    navigate("/signup", {
      state: { targetUrl: location },
      replace: true,
    });
  };

  return (
    <Flex h="700px" w="96" p="7" direction="column" mx="auto" mt="7">
      <Heading fontSize="xl" textAlign="center" mb="3">
        Login
      </Heading>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <VStack gap="1">
          <TextInput
            label="Email"
            name="email"
            type="text"
            handleForm={handleForm}
            validations={{
              required: "Email is Required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email",
              },
            }}
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            handleForm={handleForm}
            validations={{
              required: "Password is Required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters long",
              },
            }}
          />

          <Input
            disabled={authLoading}
            value="Login"
            type="submit"
            size="lg"
            cursor="pointer"
            bg="primary.900"
            _active={{ bg: "primary.700" }}
            color="white"
          />
        </VStack>

        {loginError && <Text color="red.600">{loginError}</Text>}
      </form>

      <Flex mt="5px">
        <Text mr="5px">New to Electro Recyclr</Text>
        <Text color="blue.500" fontWeight="semibold" onClick={navigateToSignUp}>
          Create new Account
        </Text>
      </Flex>

      <GoogleLogin location={location} />
    </Flex>
  );
};

export default Login;

import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputError from "../../components/InputError/InputError";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const Login = ({ product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    user,
    signIn,
    loading: authLoading,
    setLoading: setAuthLoading,
  } = useAuth();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const targetUrl = location.state?.targetUrl?.pathname || "/dashboard";

  if (user) {
    navigate(targetUrl, { replace: true });
  }

  const handleSignIn = async (data) => {
    try {
      await signIn(data.email, data.password);
    } catch (error) {
      setLoginError(error.message);
      setAuthLoading(false);
    }
  };

  return (
    <Flex h="700px" w="96" p="7" direction="column" mx="auto" mt="7">
      <Heading fontSize="xl" textAlign="center" mb="3">
        Login
      </Heading>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <VStack gap="1">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email",
                },
              })}
            />
            {errors?.email && <InputError error={errors?.email?.message} />}
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
            />
            {errors?.password && (
              <InputError error={errors?.password?.message} />
            )}
          </FormControl>

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
        <Text color="blue.500" fontWeight="semibold">
          <Link to="/signup">Create new Account</Link>
        </Text>
      </Flex>

      <GoogleLogin />
    </Flex>
  );
};

export default Login;

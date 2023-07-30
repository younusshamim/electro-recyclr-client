import React, { useState } from "react";
import { Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import { onSaveUser } from "../../services/users-services";
import TextInput from "../../dashboard/components/TextInput/TextInput";

const SignUp = ({ product }) => {
  const handleForm = useForm();
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = handleForm;

  const {
    user,
    createUser,
    updateUser,
    loading: authLoading,
    setLoading: setAuthLoading,
  } = useAuth();

  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const targetUrl = location.state?.targetUrl?.pathname || "/dashboard";

  console.log(location);

  const { mutate, isLoading, isError, isSuccess, error, data } =
    useMutation(onSaveUser);

  const handleSignUp = async (data) => {
    try {
      mutate(data);
      await createUser(data.email, data.password);
      await updateUser({ displayName: data.name });
      reset();
      toast("User Created Successfully.");
      navigate(targetUrl, { replace: true });
    } catch (err) {
      setSignUPError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <Flex h="700px" w="96" p="7" direction="column" mx="auto" mt="7">
      <Heading fontSize="xl" textAlign="center" mb="3">
        Sign Up
      </Heading>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <VStack gap="1">
          <TextInput
            label="Name"
            name="name"
            type="text"
            handleForm={handleForm}
            validations={{
              required: "Name is Required",
            }}
          />

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
            label="Mobile"
            name="mobile"
            type="text"
            handleForm={handleForm}
            validations={{
              required: "Mobile is Required",
              pattern: {
                value: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
                message: "Invalid Number",
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
            value="Sign Up"
            type="submit"
            size="lg"
            cursor="pointer"
            bg="primary.900"
            _active={{ bg: "primary.700" }}
            color="white"
          />
        </VStack>

        {signUpError && <Text color="red.600">{signUpError}</Text>}
      </form>

      <Flex mt="5px">
        <Text mr="5px">Already have an account</Text>
        <Text color="blue.500" fontWeight="semibold">
          <Link to="/login">Please Login</Link>
        </Text>
      </Flex>

      <GoogleLogin location={location} />
    </Flex>
  );
};

export default SignUp;

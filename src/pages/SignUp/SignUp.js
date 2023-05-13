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
import toast from "react-hot-toast";

const SignUp = ({ product }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useAuth();
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (data) => {
    createUser(data.email, data.password)
      .then(updateUser({ displayName: data.name }))
      .then(() => {
        reset();
        navigate("/dashboard", { replace: true });
        toast("User Created Successfully.");
      })
      .catch((err) => {
        console.log(err);
        setSignUPError(err.message);
      });
  };

  return (
    <Flex h="700px" w="96" p="7" direction="column" mx="auto" mt="7">
      <Heading fontSize="xl" textAlign="center" mb="3">
        Sign Up
      </Heading>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <VStack gap="1">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
            />
            {errors?.name && <InputError error={errors?.name?.message} />}
          </FormControl>

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
            <FormLabel>Mobile</FormLabel>
            <Input
              type="text"
              {...register("mobile", {
                required: "Mobile is Required",
                pattern: {
                  value: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
                  message: "Invalid Number",
                },
              })}
            />
            {errors?.mobile && <InputError error={errors?.mobile?.message} />}
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

      <Button size="lg" mt="15px" variant="outline" border="1px solid black">
        Continue With Google
      </Button>
    </Flex>
  );
};

export default SignUp;

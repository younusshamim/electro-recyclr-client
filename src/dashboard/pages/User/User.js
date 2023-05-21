import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputError from "../../components/InputError/InputError";
import { useAuth } from "../../../contexts/AuthProvider";
import { useMutation } from "react-query";
import { onUpdateUser } from "../../../services/users-services";
import toast from "react-hot-toast";

const User = () => {
  const { userDetails, updateUser, updateUserPassword, refetchUser } =
    useAuth();

  const initValues = {
    name: userDetails?.name,
    email: userDetails?.email,
    mobile: userDetails?.mobile,
    password: userDetails?.password,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initValues,
  });

  const { mutate } = useMutation(onUpdateUser);

  const handleSave = async (data) => {
    try {
      await updateUserPassword(data.password);
      await updateUser({ displayName: data.name });
      await mutate({
        id: userDetails._id,
        ...data,
      });
      toast("User Updated Successfully.");
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    refetchUser();
    reset({
      name: userDetails.name,
      email: userDetails.email,
      mobile: userDetails.mobile,
      password: userDetails.password,
    });
  }, [refetchUser, userDetails, reset]);

  return (
    <Stack align="center" justify="center">
      <form onSubmit={handleSubmit(handleSave)}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} w="700px" mt="10">
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
            <Input type="text" {...register("email")} />
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

          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input type="file" />
          </FormControl>

          {userDetails?.img && (
            <FormControl>
              <Image
                src={userDetails?.img}
                h="80px"
                w="80px"
                borderRadius="5"
                objectFit="cover"
              />
            </FormControl>
          )}
        </Grid>

        <Input
          mt="6"
          value="Save"
          type="submit"
          size="lg"
          cursor="pointer"
          bg="primary.900"
          _active={{ bg: "primary.700" }}
          color="white"
        />
      </form>
    </Stack>
  );
};

export default User;

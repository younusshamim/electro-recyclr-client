import React, { useEffect, useState } from "react";
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
import saveImageToImgBB from "../../../utils/saveImageToImgBB";

const User = () => {
  const { updateUser, updateUserPassword, userDetails, getUserDetails } =
    useAuth();
  const [imageFiles, setImageFiles] = useState(null);
  const imgUrl = imageFiles && URL.createObjectURL(imageFiles[0]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();

  const { mutate } = useMutation(onUpdateUser);

  const handleSave = async (data) => {
    try {
      const imgBB = imageFiles && (await saveImageToImgBB(imageFiles));
      const userData = {
        id: userDetails._id,
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        password: data.password,
        img: imgBB ? imgBB.display_url : userDetails.img,
      };
      mutate(userData);
      await updateUserPassword(data.password);
      await updateUser({ displayName: data.name });
      await getUserDetails();
      toast("User Updated Successfully.");
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    if (userDetails) {
      setValue("name", userDetails.name);
      setValue("email", userDetails.email);
      setValue("mobile", userDetails.mobile);
      setValue("password", userDetails.password);
    }
  }, [userDetails, setValue]);

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
            <Input readOnly type="text" {...register("email")} />
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
            <Input
              type="file"
              onChange={(e) => setImageFiles(e.target.files)}
            />
          </FormControl>

          {userDetails?.img && (
            <FormControl>
              <Image
                src={imgUrl ? imgUrl : userDetails.img}
                h="80px"
                w="80px"
                borderRadius="5"
                objectFit="cover"
              />
            </FormControl>
          )}
        </Grid>

        <Input
          disabled={isSubmitting}
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

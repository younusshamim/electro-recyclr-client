import React from "react";
import Images from "../Images/Images";
import Information from "../Information/Information";
import { Flex } from "@chakra-ui/react";

const Restaurant = () => {
  const item = {
    id: 1,
    name: "Google pixel 6 pro",
    categoryId: 3242,
    category: "Smart phones",
    resalePrice: 8000,
    orginalPrice: 15000,
    yearsOfUse: "2 Years 5 Months",
    condition: "Used",
    district: "Dhaka",
    address: "497, Rd No 09, Baridhara DOHS, Dhaka",
    postedTime: "4/15/2023, 11:44:15 PM",
    description:
      "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    thumbnail:
      "https://amateurphotographer.com/wp-content/uploads/sites/7/2021/11/google-pixel-6-pro-in-hand.jpg",
    images: [
      "https://amateurphotographer.com/wp-content/uploads/sites/7/2021/11/pixel-6-pro-rear-P1088727_cropped.jpg?w=900",
      "https://www.zdnet.com/a/img/resize/e33e937d8f73f196d32150f79414f594c7ea60a7/2021/10/24/db529865-2db5-4f02-a674-18843d7dbba8/pixel-6-pro-1.jpg?auto=webp&fit=crop&height=1200&width=1200",
      "https://amateurphotographer.com/wp-content/uploads/sites/7/2021/11/google-pixel-6-pro-in-hand.jpg",
    ],

    sellerId: 2343,
    sellerName: "Zakeria Abedin",
    isVerified: true,
    mobile: "01858286180",
  };

  return (
    <Flex p="50px 120px 25px 120px">
      <Images item={item} />
      <Information item={item} />
    </Flex>
  );
};

export default Restaurant;

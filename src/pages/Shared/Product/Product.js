import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { commaFormat, timeDistance } from "../../../utils";
import { MdVerifiedUser } from "react-icons/md";

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`}>
      <Stack cursor="pointer" className={styles.singleProduct}>
        <Box overflow="hidden" borderRadius="xl" p="10px" bg="gray.100">
          <Image
            w="100%"
            h="190px"
            objectFit="cover"
            src={product?.images[0]}
            alt={product?.name}
            className={styles.productImage}
            transition="0.5s"
          />
        </Box>

        <Box>
          <Heading fontSize="18px" fontWeight="semibold" mb="5px" color="black">
            {product?.name}
          </Heading>

          <HStack>
            <Text color="gray.500" mr="10px">
              {product?.sellerInfo?.name}
            </Text>

            {product?.sellerInfo?.status !== "User" && (
              <Flex
                align="center"
                justify="center"
                bg="gray.600"
                color="white"
                padding="0px 5px"
                fontSize="14px"
                borderRadius="5px"
              >
                <Box mr="3px">
                  <MdVerifiedUser />
                </Box>
                <Text>verified</Text>
              </Flex>
            )}
          </HStack>
          <Text color="gray.500">
            {product?.address + ", " + product?.district}
          </Text>

          <HStack justify="space-between" mt="5px">
            <Text fontWeight="semibold" color="black">
              Tk {commaFormat(product?.price)}
            </Text>
            <Text fontSize="14px" color="gray.500" fontWeight="semibold">
              {timeDistance(product?.postedTime)}
            </Text>
          </HStack>
        </Box>
      </Stack>
    </Link>
  );
};

export default Product;

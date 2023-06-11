import { Flex } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

const BeatLoading = ({ size, h = "50vh" }) => {
  return (
    <Flex w="100%" h={h} align="center" justify="center">
      <BeatLoader
        color={"#3b3b3b"}
        loading={true}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Flex>
  );
};

export default BeatLoading;

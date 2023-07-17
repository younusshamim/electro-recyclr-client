import { Flex } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

const BeatLoading = ({ size = 10, h = "50vh", w = "100%" }) => {
  return (
    <Flex w={w} h={h} align="center" justify="center">
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

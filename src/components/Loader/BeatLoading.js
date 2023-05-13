import { BeatLoader } from "react-spinners";

const BeatLoading = ({ size }) => {
  return (
    <BeatLoader
      color={"#3b3b3b"}
      loading={true}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default BeatLoading;

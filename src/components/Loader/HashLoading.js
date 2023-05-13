import { HashLoader } from "react-spinners";

const HashLoading = () => {
  return (
    <HashLoader
      color={"#3b3b3b"}
      loading={true}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default HashLoading;

import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "20px auto",
  borderColor: "white",
};

const Loading = ({ isLoading }) => {
  return (
    <BarLoader
      color="#FFFFFF"
      loading={isLoading}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loading;

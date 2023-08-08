import { useQuery } from "react-query";
import { onGetJWT } from "../services/users-services";

const useToken = (email) => {
  const { data } = useQuery(["onGetJWT", email], () => onGetJWT(email), {
    enabled: !!email,
    onSuccess: (data) => {
      const token = data?.data?.accessToken;
      if (token) {
        localStorage.setItem("accessToken", token);
      }
    },
  });

  return { Token: data?.data?.accessToken };
};

export default useToken;

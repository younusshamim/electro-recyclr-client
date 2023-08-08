import { useQuery } from "react-query";
import { isAdmin } from "../services/users-services";

const useAdmin = (email) => {
  return useQuery(["isAdmin", email], () => isAdmin(email), {
    enabled: !!email,
  });
};

export default useAdmin;

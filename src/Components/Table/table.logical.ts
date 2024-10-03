import { useQuery } from "@tanstack/react-query";
import getDataUserList from "../../api/controller";

const useTableLogical = () => {
  const { data } = useQuery({
    queryKey: ["userData"],
    queryFn: getDataUserList,
    select: (data) => {
      return data.map((item: any) => ({
        ...item,
        randomTime: `${Math.floor(Math.random() * 9 + 8)}:00`,
        randomDate: new Date(
          Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000
        )
          .toISOString()
          .split("T")[0],
      }));
    },
  });
  return {
    data,
  };
};

export default useTableLogical;

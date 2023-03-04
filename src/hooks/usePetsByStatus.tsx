import { useQuery } from "react-query";
import { getPetsByStatus } from "../bffClient/bffClient";

const usePetsByStatus = (status: Paths.FindPetsByStatus.Parameters.Status) => {
  const {
    data: petsByStatus,
    isLoading,
    isError,
  } = useQuery(`pets-${status}`, () => getPetsByStatus({ status }), {
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { petsByStatus, loading: isLoading, isError };
};

export default usePetsByStatus;

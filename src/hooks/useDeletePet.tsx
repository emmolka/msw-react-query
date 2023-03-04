import { useMutation } from "react-query";
import { deletePet } from "../bffClient/bffClient";

const useDeletePet = () => {
  const {
    mutate: deletePetMutation,
    isLoading,
    isError,
  } = useMutation(({ petId }: { petId: Paths.DeletePet.PathParameters["petId"] }) => deletePet({ petId }));

  return { deletePetMutation, loading: isLoading, isError };
};

export default useDeletePet;

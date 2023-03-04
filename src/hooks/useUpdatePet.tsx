import { useMutation } from "react-query";
import { updatePet } from "../bffClient/bffClient";

const useUpdatePet = () => {
  const {
    mutate: updatePetMutation,
    isLoading,
    isError,
  } = useMutation(
    ({
      petId,
      status,
      name,
    }: {
      petId: Paths.UpdatePetWithForm.PathParameters["petId"];
      name: Paths.UpdatePetWithForm.FormDataParameters["name"];
      status: Paths.UpdatePetWithForm.FormDataParameters["status"];
    }) => updatePet({ name, petId, status })
  );

  return { updatePetMutation, loading: isLoading, isError };
};

export default useUpdatePet;

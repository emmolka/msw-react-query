import { useMutation } from "react-query";
import { createPet } from "../bffClient/bffClient";

const useCreatePet = () => {
  const {
    mutate: createPetMutation,
    isLoading,
    isError,
  } = useMutation(
    ({
      name,
      id,
      photoUrls,
      status,
      tags,
      category,
    }: {
      name: Paths.AddPet.Parameters.Body["name"];
      id: Paths.AddPet.Parameters.Body["id"];
      photoUrls: Paths.AddPet.Parameters.Body["photoUrls"];
      status: Paths.AddPet.Parameters.Body["status"];
      tags: Paths.AddPet.Parameters.Body["tags"];
      category: Paths.AddPet.Parameters.Body["category"];
    }) => createPet({ name, id, photoUrls, status, tags, category })
  );

  return { createPetMutation, loading: isLoading, isError };
};

export default useCreatePet;

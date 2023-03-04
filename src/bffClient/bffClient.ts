const fetchUrl = "https://petstore.swagger.io/v2";

export const createPet = async (variables: {
  name: Paths.AddPet.Parameters.Body["name"];
  id: Paths.AddPet.Parameters.Body["id"];
  photoUrls: Paths.AddPet.Parameters.Body["photoUrls"];
  status: Paths.AddPet.Parameters.Body["status"];
  tags: Paths.AddPet.Parameters.Body["tags"];
  category: Paths.AddPet.Parameters.Body["category"];
}): Promise<Definitions.Pet> => {
  const { name, id, photoUrls, status, tags, category } = variables;
  const url = `${fetchUrl}/pet`;
  const body = JSON.stringify({
    name,
    id,
    photoUrls,
    status,
    tags,
    category,
  });
  return await fetch(url, { body, method: "POST" }).then(async (response) => {
    if (response.status !== 200) {
      // API doesn't return 201
      throw new Error(`Add pet failed: ${response.status}: ${response.text}`);
    }
    return await response.json();
  });
};

export const getPetsByStatus = async (variables: {
  status: Paths.FindPetsByStatus.Parameters.Status;
}): Promise<Definitions.Pet[]> => {
  const { status } = variables;
  const url = `${fetchUrl}/pet/findByStatus?status=${status}`;

  return await fetch(url).then(async (response) => {
    if (response.status !== 200) {
      // API doesn't return 201
      throw new Error(`Fetching pets by status failed: ${response.status}: ${response.text}`);
    }
    return await response.json();
  });
};

export const updatePet = async (variables: {
  petId: Paths.UpdatePetWithForm.PathParameters["petId"];
  name: Paths.UpdatePetWithForm.FormDataParameters["name"];
  status: Paths.UpdatePetWithForm.FormDataParameters["status"];
}): Promise<Definitions.Pet> => {
  const { petId, name, status } = variables;
  const url = `${fetchUrl}/pet/${petId}`;
  const body = JSON.stringify({
    name,
    status,
  });
  return await fetch(url, { body, method: "POST" }).then(async (response) => {
    if (response.status !== 200) {
      // API doesn't return 201
      throw new Error(`Update pet failed: ${response.status}: ${response.text}`);
    }
    return await response.json();
  });
};

export const deletePet = async (variables: { petId: Paths.DeletePet.PathParameters["petId"] }) => {
  const { petId } = variables;
  const url = `${fetchUrl}/pet/${petId}`;
  return await fetch(url, { method: "DELETE" }).then(async (response) => {
    if (response.status !== 200) {
      // API doesn't return 201
      throw new Error(`Delete pet failed: ${response.status}: ${response.text}`);
    }
    return await response.json();
  });
};

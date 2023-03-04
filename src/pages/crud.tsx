import TableComponent from "../components/Table/Table";
import { usePetsByStatus } from "../hooks";

const Crud = () => {
  const { petsByStatus } = usePetsByStatus(["available"]);

  console.log(petsByStatus);

  return <TableComponent rows={petsByStatus} />;
};

export default Crud;

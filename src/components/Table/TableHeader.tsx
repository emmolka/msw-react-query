import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const TableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Status</TableCell>
      <TableCell></TableCell>
    </TableRow>
  </TableHead>
);

export default TableHeader;

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import TableHeader from "./TableHeader";

interface TableComponentProps {
  rows: Definitions.Pet[] | undefined;
}

const TableComponent = ({ rows }: TableComponentProps) => (
  <TableContainer component={Paper}>
    <Table sx={{ width: "100%", maxWidth: 350 }} aria-label="simple table">
      <TableHeader />
      <TableBody>
        {rows?.map((row, index) => (
          <TableRow key={`${row.id}${row.name}${index}`} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <DeleteIcon />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TableComponent;

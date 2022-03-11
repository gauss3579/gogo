import { Button } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../App";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

const ProductDetail = () => {
  const { idproducto } = useParams();
  const [products, setProducts] = useContext(productsContext);

  return (
    <>
      {products.map((e, i) =>
        i == idproducto ? (
          <TableContainer component={Paper}>
            <br />
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell colSpan="2">
                    <center>Product Details</center>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody key={e.id}>
                <StyledTableRow>
                  <StyledTableCell align="right">Product ID:</StyledTableCell>
                  <StyledTableCell align="right">{e.id}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell align="right">Product Name:</StyledTableCell>
                  <StyledTableCell align="right">{e.name}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell align="right">
                    Product Price:
                  </StyledTableCell>
                  <StyledTableCell align="right">{e.price}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell align="right">
                    Product Description:
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {e.description}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          ""
        )
      )}
      <br />
      <Button variant="outlined" component={Link} to="/products">
        Go Back
      </Button>
    </>
  );
};

export default ProductDetail;

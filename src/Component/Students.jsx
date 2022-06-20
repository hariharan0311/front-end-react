import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteId, postFunc } from "../Redux/Reducer/SampleReducer/Action";
import { dashboard_Path, edit_path } from "../Routes/RoutePath";

const Styles = {
  heading: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  heading1: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
  },
};

function Sample() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(postFunc());
  }, []);

  const handleOpenUp = (id) => {
    navigate(dashboard_Path + id, { state: id, pathname: dashboard_Path + id });
  };
  const { post } = useSelector((state) => state.SampleReducer);
  console.log(post);

  const handleDelete = (item) => {
    deleteId(item.id).then((response) => {
      if (response.status === 200) {
      }
      console.log(response);
    });
    alert("Deleted Sucessfully");
  };

  const handleEdit = (item) => {
    navigate(edit_path + item.id, {
      state: item.id,
      pathname: edit_path + item.id,
    });
  };

  return (
    <div style={{ backgroundColor: "#F7F9F9" }}>
      <div style={{ padding: 40 }}>
        <h1>List</h1>
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={Styles.heading}>Id</TableCell>
                  <TableCell style={Styles.heading}>Title</TableCell>
                  <TableCell style={Styles.heading1}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {post?.map((item) => {
                  return (
                    <TableRow>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell
                        style={{
                          justifyContent: "space-evenly",
                          display: "flex",
                        }}
                      >
                        <VisibilityIcon
                          onClick={() => handleOpenUp(item.id)}
                          fontSize="small"
                          style={{ color: "grey", cursor: "pointer" }}
                        />
                        <EditIcon
                          onClick={() => handleEdit(item)}
                          fontSize="small"
                          style={{ color: "#1093FF", cursor: "pointer" }}
                        />
                        <DeleteIcon
                          onClick={() => handleDelete(item)}
                          fontSize="small"
                          style={{ color: "red", cursor: "pointer" }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ padding: 20 }}>
            <Stack spacing={2}>
              <Pagination count={10} style={{ alignSelf: "center" }} />
            </Stack>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Sample;

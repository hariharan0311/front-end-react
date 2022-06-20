import Back from "@mui/icons-material/ArrowBack";
import { Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getDetailsById,
  updateDetailsById,
} from "../Redux/Reducer/SampleReducer/Action";
import { NAVIGATE_TO } from "../Routes/RoutePath";

function PostEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [descp, setDescp] = useState("");
  const [title, setTitle] = useState("");

  const { postById } = useSelector((state) => state.SampleReducer);
  useEffect(() => {
    dispatch(getDetailsById(location.state));
    setTitle(postById?.title);
    setDescp(postById?.body);
  }, []);

  console.log(postById);

  const handleEdit = () => {
    let data = {
      id: postById.id,
      title: title,
      body: descp,
      userId: postById.userId,
    };
    console.log(data);
    dispatch(updateDetailsById(postById.id, data));
    alert("Updated sucessfully");
    navigate(NAVIGATE_TO.welcomePath());
  };

  return (
    <div style={{ display: "flex", padding: 50 }}>
      <Back
        onClick={() => navigate(NAVIGATE_TO.welcomePath())}
        style={{ cursor: "pointer" }}
      />
      <div
        style={{
          padding: 30,
          height: "100%",
          width: "90%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Grid container spacing={2} style={{ padding: 25 }}>
            <Grid item md={12}>
              <TextField
                style={{ width: 650 }}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>

            <Grid item md={12}>
              <TextField
                style={{ width: 650 }}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={descp}
                onChange={(e) => setDescp(e.target.value)}
                multiline
              />
            </Grid>
            <Grid item md={12}>
              <Button
                onClick={handleEdit}
                variant="contained"
                style={{ alignSelf: "center" }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
export default PostEdit;

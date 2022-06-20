import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { NAVIGATE_TO } from "../Routes/RoutePath";
import { getDetailsById } from "../Redux/Reducer/SampleReducer/Action";
import Paper from "@mui/material/Paper";
import Back from "@mui/icons-material/ArrowBack";

function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsById(location.state));
  }, []);

  const { postById } = useSelector((state) => state.SampleReducer);
  console.log(postById);
  return (
    <div style={{ display: "flex", padding: 50 }}>
      <Back
        onClick={() => navigate(NAVIGATE_TO.welcomePath())}
        style={{ cursor: "pointer" }}
      />
      <div
        style={{
          padding: 10,
          height: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Paper
          sx={{
            width: "50%",
            overflow: "hidden",
          }}
        >
          <Grid container spacing={2} style={{ padding: 25 }}>
            <Grid item md={3} style={{ fontWeight: "bold" }}>
              Title
            </Grid>
            <Grid item md={9}>
              {postById.title}
            </Grid>
            <Grid item md={3} style={{ fontWeight: "bold" }}>
              Description
            </Grid>
            <Grid item md={9}>
              {postById.body}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default Welcome;

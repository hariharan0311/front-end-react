import { SAMPLE } from "../SampleReducer/ActionType";
import axios from "axios";

export const postFunc = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        crossDomain: true,
      })
      .then((result) => {
        dispatch({ type: SAMPLE.post, payload: result.data });
      })
      .catch((error) => {});
  };
};

export const getDetailsById = (id) => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id, {
        crossDomain: true,
      })
      .then((result) => {
        dispatch({ type: SAMPLE.postById, payload: result.data });
      })
      .catch((error) => {});
  };
};

export const updateDetailsById = (id, data) => {
  return (dispatch) => {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/" + id, data, {
        crossDomain: true,
        "Content-type": "application/json; charset=UTF-8",
      })
      .then((result) => {
        dispatch({ type: SAMPLE.updateDetails, payload: result.data });
      })
      .catch((error) => {});
  };
};

export const deleteId = async (id) => {
  let accessToken = window.sessionStorage.getItem("accessToken");

  try {
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    return response;
  } catch (error) {
    return error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  }
};

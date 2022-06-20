import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Students from "../Component/Students";
import Details from "../Component/StudentDetails";
import { dashboard_Path, ROOT_PATH, edit_path } from "./RoutePath";
import EditDetails from "../Component/postEdit";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={ROOT_PATH} element={<Students />} />
          <Route path={dashboard_Path + ":id"} element={<Details />} />
          <Route path={edit_path + ":id"} element={<EditDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default MainRoutes;

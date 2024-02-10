import React from "react";
import "./App.css";
import Topcards from "./component/Topcards";
import MainContainer from "./component/MainContainer";
import Layout from "./Layout";
import Todo from "./ReactPractice/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainContainer />} />
            <Route path="topcards" element={<Topcards />} />
            <Route path="Todo" element={<Todo />} /> 
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

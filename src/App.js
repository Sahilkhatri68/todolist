import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import HOC from "./Components/HOC";
import Map from "./Components/Map";
import Inc_Dec from "./Components/Inc_Dec";
import Data_fetch from "./Components/Data_fetch";
import ToDoList from "./Components/ToDoList";
import Todo from "./Components/Todo";
function App() {
  const info = {
    name: "sahil",
    age: 22,
  };
  // const info = "SAHIL";
  return (
    <>
      <Routes>
        <Route path="/" element={<Body data={info} />}></Route>
        <Route path="/todolist" element={<ToDoList />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
      {/* <Body data={info} />

      <Data_fetch /> */}
    </>
  );
}

export default App;

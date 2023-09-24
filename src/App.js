import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import HOC from "./Components/HOC";
import Map from "./Components/Map";
import Inc_Dec from "./Components/Inc_Dec";
import Data_fetch from "./Components/Data_fetch";
import ToDoList from "./Components/ToDoList";
import Todo from "./Components/Todo";
import Timer from "./Components/Timer";
import Concepts from "./Components/Concepts";
import Usecontext_exp from "./Components/Usecontext_exp";
import UseReducer_exp from "./Components/UseReducer_exp";
import ReactLifecycle from "./Components/ReactLifecycle";
function App() {
  const info = {
    name: "sahil",
    age: 22,
  };

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Body data={info} />}></Route>
        <Route path="/todolist" element={<ToDoList />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/timer" element={<Timer />}></Route>
       
        <Route path="/usectx" element={<Usecontext_exp />}></Route> 
        <Route path="/usereducer" element={<UseReducer_exp />}></Route>*/}
        <Route path="/concepts" element={<Concepts />}></Route>
        <Route path="/lifecycle" element={<ReactLifecycle />}></Route>
      </Routes>
      {/* <Body data={info} />
      <Data_fetch /> */}
    </>
  );
}

export default App;

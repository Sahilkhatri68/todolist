import React from "react";
import { Link } from "react-router-dom";

function Body(props) {
  console.log(props);
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginTop: 10,
        }}
      >
        <u>..PROPS.. </u>
      </div>
      Name:{props.data.name} <br />
      Age:{props.data.age}
      <div>
        <br />
        <Link to="/todolist">
          <button>ToDoList</button>
        </Link>
      </div>
    </div>
  );
}

export default Body;

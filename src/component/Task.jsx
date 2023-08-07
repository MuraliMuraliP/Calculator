import React from "react";
import { useState } from "react";

export const Task = () => {
  const [name, setName] = useState("Murali");
  return (
    <div>
      <h2>UseState Hook</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Hello my Name is {name}</p>
    </div>
  );
};
export default Task;
import React from "react";
import { Sample1 } from "./Sample1";
export const UserContext = React.createContext();
export const EmailContext = React.createContext();

export const TaskTwo = () => {
  return (
    <div>
      <UserContext.Provider value={"murali"}>
        <EmailContext.Provider value={"17@gmail.com"}>
          <Sample1 />
        </EmailContext.Provider>
      </UserContext.Provider>
    </div>
  );
};
export default TaskTwo;
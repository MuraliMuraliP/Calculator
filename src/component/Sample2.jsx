import React from "react";
import { useContext } from "react";
import { UserContext } from "./useContext";
import { EmailContext } from "./useContext";

export const Sample2 = () => {
  const username = useContext(UserContext);
  const email = useContext(EmailContext);
  return (
    <div>
      <h2>useContext Hook</h2>
      Username:{username}
      <div>Email:{email}</div>
    </div>
  );
};
export default Sample2;
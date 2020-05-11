import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setState] = useState({
    name: "hello from context",
    testOneHighScore: "0",
    testOnePassed: "no",
    testThreeHighScore: "0",
    testThreePassed: "no",
    testTwoHighScore: "0",
    testTwoPassed: "no",
  });
  const setLoggedInUser = (user) => {
    setState({
      name: user.name,
      testOneHighScore: user.testOneHighScore,
      testOnePassed: user.testOnePassed,
      testThreeHighScore: user.testThreeHighScore,
      testThreePassed: user.testThreePassed,
      testTwoHighScore: user.testTwoHighScore,
      testTwoPassed: user.testTwoPassed,
    });
  };
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

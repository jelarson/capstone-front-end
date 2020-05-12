import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setState] = useState({
    name: "hello from context",
    testOneHighScore: "0",
    testOnePassed: "0",
    testThreeHighScore: "0",
    testThreePassed: "0",
    testTwoHighScore: "0",
    testTwoPassed: "0",
  });
  const setLoggedInUser = (user) => {
    setState({
      name: user.name,
      id: user.id,
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

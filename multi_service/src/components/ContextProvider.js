//import React, { useState, useEffect } from "react";
import { createContext } from "react";
//import { db } from "../configuration/firebase-config";
//import { doc, onSnapshot, collection, getDocs } from "firebase/firestore";
//import useAuth from "../Hooks/UseAuth";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  //  const { user } = useAuth();
  //  const [userData, setuserData] = useState({
  //    name: "Your Name",
  //    email: "Your Email",
  //    phone: "Your Phone",
  //    address: "Your Address",
  //    image: null,
  //  });

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default ContextProvider;

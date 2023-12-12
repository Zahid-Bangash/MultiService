import React, { useState } from "react";
import { createContext } from "react";
//import { db } from "../configuration/firebase-config";
//import { doc, onSnapshot, collection, getDocs } from "firebase/firestore";
//import useAuth from "../Hooks/UseAuth";

import job1 from "../assets/job1.png";
import job2 from "../assets/job2.png";
import job3 from "../assets/job3.png";

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
  const [jobs, setJobs] = useState([
    {
      img: job1,
      id: "1",
      title: "Home repairer to repair doors and windows of 2 rooms",
      recruiter: "Aryan Hassan",
      address: "New York, USA",
      price: [10, 25],
      jobType: "Per Hour",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas id porro, beatae sequi nisi repellendus adipisci tempore labore, nulla animi sapiente, repellat aspernatur ipsam dolorem cum debitis delectus et.",
      skills: ["Home Repair", "Door Repair", "Window Repair"],
      timestamp: "12hr ago",
      date: "10 September",
    },
    {
      id: "2",
      img: job2,
      title: "Handy Man for floor installation and plumbing",
      recruiter: "Wonder8 Inc.",
      address: "New York, USA",
      price: [40, 50],
      jobType: "Per Hour",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas id porro, beatae sequi nisi repellendus adipisci tempore labore, nulla animi sapiente, repellat aspernatur ipsam dolorem cum debitis delectus et.",
      skills: ["Floor Installation", "Plumbing", "Repair"],
      timestamp: "12hr ago",
      date: "8 March",
    },
    {
      id: "3",
      img: job3,
      title: "Need a home cleaner for full time",
      recruiter: "Soloman Lane",
      address: "New York, USA",
      price: [200, 350],
      jobType: "Average",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas id porro, beatae sequi nisi repellendus adipisci tempore labore, nulla animi sapiente, repellat aspernatur ipsam dolorem cum debitis delectus et.",
      skills: ["Home Cleaning", "Floor Cleaning", "Car Washing"],
      timestamp: "12hr ago",
      date: "12 January",
    },
    {
      id: "4",
      img: job1,
      title: "Home repairer to repair doors and windows of 2 rooms",
      recruiter: "Aryan Hassan",
      address: "New York, USA",
      price: [10, 25],
      jobType: "Per Hour",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas id porro, beatae sequi nisi repellendus adipisci tempore labore, nulla animi sapiente, repellat aspernatur ipsam dolorem cum debitis delectus et.",
      skills: ["Home Repair", "Door Repair", "Window Repair"],
      timestamp: "12hr ago",
      date: "20 October",
    },
  ]);

  return <Context.Provider value={{ jobs }}>{children}</Context.Provider>;
};

export default ContextProvider;

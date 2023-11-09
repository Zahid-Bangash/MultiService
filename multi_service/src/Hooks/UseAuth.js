import { useState } from "react";
//import { onAuthStateChanged, getIdTokenResult } from "firebase/auth";
//import { auth } from "../configuration/firebase-config";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

//  useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, async (user) => {
//      setUser(user);
//      setUserLoading(false);
//      if (user) {
//        const idTokenResult = await getIdTokenResult(user);
//        setIsAdmin(!!idTokenResult.claims.isAdmin);
//      }
//    });

//    return () => unsubscribe();
//  }, []);

  return { user, userLoading, isAdmin };
};

export default useAuth;

// src/context/AuthContext.jsx
//
// This "remembers" whether someone is logged in, and shares that
// information with every page/component in the app, so we don't have
// to pass it down manually through props everywhere.

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase calls this function automatically whenever someone
    // logs in, logs out, or refreshes the page.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe; // cleanup when the app closes
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// A small helper so pages can just do: const { user } = useAuth();
export function useAuth() {
  return useContext(AuthContext);
}

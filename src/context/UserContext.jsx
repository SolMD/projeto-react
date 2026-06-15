import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);

  return (
    <UserContext.Provider
      value={{ usuarios, setUsuarios }}
    >
      {children}
    </UserContext.Provider>
  );
}
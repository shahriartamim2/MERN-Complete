import { createContext, useContext } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  return (
    <AuthContext.Provider value={storeTokenInLS}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {

    const AuthContextValue = useContext(AuthContext)
    if(!AuthContextValue){
        throw new Error("useAuth used outside of the provider")
    }
    return AuthContextValue
};

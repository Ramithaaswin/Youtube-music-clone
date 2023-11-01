import React, { createContext, useState } from "react";

const authContext = createContext();
const initialData = {
  token: null,
  authenticated: false,
  user: {
    name: "",
  },
};

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(initialData);

  const signUser = (payload) => {
    const { token, data } = payload;
    const userData = data?.user ? data.user : data;
    // console.log(userData);
  };
};

function AuthContextProvider() {
  return <div>AuthContextProvider</div>;
}

export default AuthContextProvider;

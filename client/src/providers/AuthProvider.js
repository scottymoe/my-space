import React, {useState} from "react";
import axios from "axios";

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props ) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authErrors, setAuthErrors] = useState(null);

  const handleRegister = async (user, history) => {
    try {
      setAuthLoading(true);
      setAuthErrors(null);
      // let resw = await axios.get("https://regres.in/api/users?delay=2")

      console.log("now registering");
      let res = await axios.post("/api/auth", user);
      console.log("response", res);
      
      setUser(res.data.data);
      history.push("/")
    } catch (err) {
      console.log(err)
      debugger;
      setAuthErrors(err)
    } finally {
      setAuthLoading(false)
    };
  }
  
  const handleLogin = async (user, history) => {
    try {
      setAuthLoading(true);
      setAuthErrors(null);
      let res = await axios.post("api/auth/sign_in", user);
      setUser(res.data.data);
      history.push("/")
    } catch (err) {
      setAuthErrors(err.response.data.errors);
    } finally {
      setAuthLoading(false);
    }
  };
  
  const handleLogout = async (history) => {
    try {
      let res = await axios.delete("/api/auth/sign_out");
      setUser(null);
      history.push("/login");
    } catch (err) {
  
    }
  }
  
  return (
      <AuthContext.Provider 
      value={{
        user,
        authenticated: user !== null,
        authLoading,
        authErrors,
        setUser,
        handleRegister,
        handleLogout,
        handleLogin,
      }}>
        { props.children }
      </AuthContext.Provider>
    );
}

export default AuthProvider;

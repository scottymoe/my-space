import React, {useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {AuthContext} from "../providers/AuthProvider";

const Navbar = () => {
  const history = useHistory(); 
  const { user, handleLogout} = useContext(AuthContext);
  const getRightNav = () => {
    if(user) {
      return (
        <>
        <div
          onClick = {() => handleLogout(history)}
          style={{color:"steelblue"}}
          >
          logout!
          </div>
        </>
      );
    } else{
      return(
        <>
          <Link to="/register"> register</Link>
          <span style={{marginRight: "10px"}}></span>
          <Link to="/login"> login </Link>
        </>
      );
    }
  };

  return(
    <div style={styles.navbar}>
      <div>
        <Link to="/">Home</Link>
        <span style={{marginRight: "10px"}}></span>
      </div>
      <div>{getRightNav()}</div>
    </div>
  )
}

const styles = {
  navbar: {
    width: "100%",
    background: "blue",
    text: "black",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default Navbar;
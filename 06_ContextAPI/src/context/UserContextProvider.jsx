import React from "react";
import PropTypes from "prop-types";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;

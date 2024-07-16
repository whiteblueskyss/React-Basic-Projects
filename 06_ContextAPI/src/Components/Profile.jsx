import { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
  const { user } = useContext(userContext);

  if (user == null) {
    return <div className="">Please LogIn</div>;
  } else {
    return <div className="">Welcome {user}</div>;
  }
}

export default Profile;

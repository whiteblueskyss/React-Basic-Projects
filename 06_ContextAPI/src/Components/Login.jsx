import { useContext, useState } from "react";
import userContext from "../context/userContext";
function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <div>
      <h2>LogIn</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

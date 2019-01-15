import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username,
      password
    };
    setUser(userData);
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center"
        }}
      >
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={event => setUsername(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {user && JSON.stringify(user)}
    </div>
  );
}

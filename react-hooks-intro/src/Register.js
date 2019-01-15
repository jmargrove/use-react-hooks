import React, { useState } from "react";

const initialState = { username: "", password: "", email: "" };

export default function Register() {
  const [form, setForm] = useState(initialState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialState);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register</h2>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center"
        }}
      >
        <input
          type="text"
          value={form.username}
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          value={form.email}
          type="text"
          placeholder="Email Address"
          name="email"
          onChange={handleChange}
        />
        <input
          value={form.password}
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        {user && JSON.stringify(user)}
      </form>
    </div>
  );
}

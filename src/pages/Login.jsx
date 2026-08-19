// src/pages/Login.jsx
//
// signInWithEmailAndPassword is a Firebase function that checks the
// email/password against Firebase's servers. It's "async" because it
// has to talk to the internet, so we use async/await and try/catch
// to handle both success and failure.

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // send them home after logging in
    } catch (err) {
      setError("Incorrect email or password. Please try again.");
    }
  }

  return (
    <div className="max-w-sm mx-auto px-6 py-20">
      <h1 className="font-display text-4xl mb-8 text-center">Log in</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
          className="border border-espresso/20 rounded-lg px-4 py-3 focus:outline-none focus:border-copper"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
          className="border border-espresso/20 rounded-lg px-4 py-3 focus:outline-none focus:border-copper"
        />

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="bg-copper text-ivory px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Log in
        </button>
      </form>

      <p className="text-sm text-center mt-6 text-espresso-light">
        Don't have an account?{" "}
        <Link to="/register" className="text-copper font-medium">
          Register
        </Link>
      </p>
    </div>
  );
}

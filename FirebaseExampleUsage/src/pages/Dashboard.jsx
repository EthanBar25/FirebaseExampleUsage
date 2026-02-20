import React from "react";
import { useAuth } from "../auth/AuthProvider";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: 16 }}>
      <h2>Dashboard (Protected)</h2>
      <p>You are logged in as: <b>{user?.email}</b></p>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
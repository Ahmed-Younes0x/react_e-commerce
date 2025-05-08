import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="text-center my-5">
      <h3>404 - Not found page</h3>
      <Link to="/">Back to home</Link>
    </div>
  );
}

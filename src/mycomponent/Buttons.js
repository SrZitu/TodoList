import React from "react";

export default function Buttons({ handleDelete }) {
  return (
    <div>
      <button
        type="button"
        style={{ background: "#e63946", color: "white", fontSize: "1rem" }}
        onClick={handleDelete}
      >
        Delete Me
      </button>
    </div>
  );
}

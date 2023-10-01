import React, { useState } from "react";

export const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="color" value={color} />
        <input onChange={handleChange} value={color} type="text" placeholder="#f15025" />
        <button
          className="btn"
          type="submit"
          style={{ background: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
};

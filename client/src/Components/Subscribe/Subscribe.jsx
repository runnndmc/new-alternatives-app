import React, { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const [emailInput, updateEmailInput] = useState("");
  const [nameInput, updateNameInput] = useState("");

  const handleStorage = (e) => {
    e.preventDefault();
    console.log(`current ${emailInput}`);
    sessionStorage.setItem("bill", emailInput);
    updateEmailInput("");
    console.log(`updated ${emailInput}`);
    const tim = sessionStorage.getItem("don");
    console.log(tim);
  };

  const handleChange = (e) => {
    const email = e.target.value;
    updateEmailInput(email);
  };

  return (
    <>
      <form className="email-form" onSubmit={handleStorage}>
        <input
          type="email"
          className="input-email"
          placeholder="Email"
          value={emailInput}
          onChange={handleChange}
        />
        <button className="subscribe-button">Subscribe</button>
      </form>
    </>
  );
};

export default Subscribe;

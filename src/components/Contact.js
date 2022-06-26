// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  return (
    <div key={email} className="card">
      <img src={photo} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;

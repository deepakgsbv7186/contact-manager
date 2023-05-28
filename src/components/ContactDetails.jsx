import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../config/firebase";

const ContactDetails = () => {
  const returnToHome = useNavigate();
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const theContact = async (id) => {
    try {
      const contactsRef = doc(db, "contacts", id);
      const contactSnap = await getDoc(contactsRef);
      if (contactSnap.exists()) {
        setContact(contactSnap.data());
      }
    } catch (error) {
      console.log(error);
    }
  };
  theContact(id);

  return (
    <>
      <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
        <h2 className="text-4xl text-primary">{contact.name}</h2>
        <p className="text-lg text-secondary">{contact.email}</p>
      </div>
      <div
        onClick={() => returnToHome("/")}
        className="cursor-pointer self-start p-4 font-semibold text-base"
      >
        🡠 Return to Home
      </div>
    </>
  );
};

export default ContactDetails;

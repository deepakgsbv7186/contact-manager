import React, { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { FcSearch } from "react-icons/fc";
import { AiFillPlusCircle } from "react-icons/ai";
import ContactCard from "./components/ContactCard";
import AddPlusUpdate from "./components/AddPlusUpdate";
import useDisclose from "./hooks/useDisclose";
import NoContacts from "./components/NoContacts";
import { Route, Routes } from "react-router-dom";

const App = () => {
  // Fetch contacts from Firebase
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    getContacts();
  }, []);

  // search contacts
  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  // modal hook with open and close funtionality
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      {/* Navbar Starts */}
      <Navbar />
      {/* Navbar Ends */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      {/* Search Bar Starts */}
      <div className="mx-auto my-4 flex justify-center gap-1">
        <div className="relative flex items-center">
          <FcSearch className="absolute pl-2 text-4xl text-primary" />
          <input
            type="text"
            onChange={filterContacts}
            className="border-1 flex-grow rounded-md border bg-dark p-2 pl-10 text-xl text-primary outline-none"
          />
        </div>
        <AiFillPlusCircle
          onClick={onOpen}
          className="cursor-pointer text-5xl text-secondary"
        />
      </div>
      {/* Search Bar Ends */}

      {/* Contact Show Starts */}
      <div className="mt-4 flex flex-col gap-3 md:mx-auto md:w-[80%] md:flex-row md:flex-wrap">
        {contacts.length <= 0 ? (
          <NoContacts />
        ) : (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
      </div>
      {/* Contact Show Ends */}

      {/* Modal Form Section Starts */}
      <AddPlusUpdate isOpen={isOpen} onClose={onClose} />
      {/* Modal Form Section Ends */}

      {/* Toast Message Starts */}
      <ToastContainer position="bottom-center" theme="dark" />
      {/* Toast Message Ends */}
    </>
  );
};

export default App;

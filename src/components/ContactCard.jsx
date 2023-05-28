import React from "react";
import { RxAvatar } from "react-icons/rx";
import { BiTrash, BiEdit } from "react-icons/bi";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useDisclose from "../hooks/useDisclose";
import AddPlusUpdate from "./AddPlusUpdate";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  // modal hook with open and close funtionality
  const { isOpen, onOpen, onClose } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mx-auto flex w-[340px] gap-2 rounded-lg bg-base p-4">
        <Link
          to={`/contact/${contact.id}`}
          className="flex w-3/4 items-center justify-start gap-2"
        >
          <RxAvatar className="text-5xl text-secondary" />
          <div className="space-y-1">
            <h2 className="font-bold text-primary">{contact.name}</h2>
            <p className="text-sm text-secondary">{contact.email}</p>
          </div>
        </Link>
        <div className="flex w-1/4 items-center justify-evenly gap-3 text-2xl">
          <BiEdit onClick={onOpen} className="cursor-pointer text-blue-300" />
          <BiTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-red-300"
          />
        </div>
      </div>
      <AddPlusUpdate
        isUpdate
        contact={contact}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;

import React from "react";

const NoContacts = () => {
  return (
    <>
      <div className="flex h-[60vh] w-full items-center justify-center gap-2">
        <div>
          <img
            src="/assets/contact.png"
            alt="no-contact"
            className="w-[30px] object-contain"
          />
        </div>
        <h3 className="text-xl text-primary">No Contacts</h3>
      </div>
    </>
  );
};

export default NoContacts;

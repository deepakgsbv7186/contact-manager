import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="m-4 flex items-center justify-center gap-3 rounded-md bg-base py-3">
        <img src="/assets/firebase.png" alt="logo" />
        <h2 className="text-2xl font-bold text-primary">Contact Manager</h2>
      </nav>
    </>
  );
};

export default Navbar;

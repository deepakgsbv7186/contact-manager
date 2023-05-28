import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactDetails from "./components/ContactDetails";

const App = () => {
  return (
    <>
      {/* Navbar Starts */}
      <Navbar />
      {/* Navbar Ends */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="contact/:id" element={<ContactDetails />} />
      </Routes>
    </>
  );
};

export default App;

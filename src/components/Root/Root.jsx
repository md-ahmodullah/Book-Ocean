import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Root() {
  return (
    <section className="w-11/12 mx-auto">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </section>
  );
}

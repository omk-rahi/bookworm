import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="grid h-dvh w-dvw grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;

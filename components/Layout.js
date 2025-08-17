// components/Layout.js
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto pt-24 pb-12 px-6">{children}</main>
    </div>
  );
};

export default Layout;

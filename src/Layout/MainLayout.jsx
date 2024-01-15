import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

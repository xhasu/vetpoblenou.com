import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

const LayoutMain = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <div className="bg-light">
        <Footer />
      </div>
    </div>
  );
};

export default LayoutMain;

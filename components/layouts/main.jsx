import Header from "components/shared/header";
import Footer from "components/shared/footer";

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

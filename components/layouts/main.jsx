import Header from "components/shared/header";
import Footer from "components/shared/footer";

const LayoutMain = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <div className="bg-light bg-opacity-50">
        <Footer />
      </div>
    </div>
  );
};

export default LayoutMain;

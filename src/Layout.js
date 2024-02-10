import { Outlet, Link } from "react-router-dom";
import Header from "./component/Header";
import Topcards from "./component/Topcards";
import Footer from "./component/Footer";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/Todo">Todo</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Header />
      <Topcards />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

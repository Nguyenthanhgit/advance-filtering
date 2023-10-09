import { BsCart4 } from "react-icons/bs";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <BsCart4 />
          </h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
}

export default Sidebar;

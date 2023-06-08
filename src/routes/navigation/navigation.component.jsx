import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
// Apparently you can import `SVG` files as `ReactComponent`
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    // Fragment is an empty parent container which will not show up on html.
    // Just like `div` but we can see `div` in inspect_element
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      {/* Outlet is used to bring in the child of Navigation route, based on current route location. */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "../../redux/theme/themeSlice";
import ScrollIndicator from "./ScrollIndicator";

const Navbar = () => {
  const [theme, setTheme] = useState(useSelector((state) => state.theme.value));
  const dispatch = useDispatch();

  const themeToggler = () => {
    if (theme !== "dark") {
      dispatch(setDarkTheme());
      setTheme("dark");
    } else {
      dispatch(setLightTheme());
      setTheme("light");
    }
  };

  const currentUrl = window.location.href;
  const pageName = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
  console.log(pageName);

  return (
    <>
      <ScrollIndicator />
      <div style={{ display: "flex" }}>
        <h1 style={{ margin: 0 }}>Navbar</h1>
        <button onClick={() => themeToggler()}>Change Theme</button>
      </div>
    </>
  );
};

export default Navbar;

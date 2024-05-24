import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./themes";
import "@fontsource/montserrat";
import Navbar from "./components/commonComponents/navbarComponent/NavbarComponent";
import ScrollToTop from "./components/commonComponents/scrollToTopComponent/ScrollToTopComponent";
import Homepage from "./screens/Homepage";
import Footer from "./components/commonComponents/footerComponent/FooterComponent";
import { useSelector, useDispatch } from "react-redux";
import { setLightTheme } from "./redux/theme/themeSlice";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

function App() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const setDefaultTheme = () => {
    if (
      localStorage.getItem("currentTheme") === null ||
      localStorage.getItem("currentTheme") === ""
    ) {
      localStorage.setItem("currentTheme", "light");
      dispatch(setLightTheme());
    }
  };

  // const themeReset = () => {
  //   localStorage.clear();
  //   console.log("reset-complete");
  // };

  useEffect(() => {
    // themeReset();
    setDefaultTheme();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <div fontFamily={"Montserrat"}>
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

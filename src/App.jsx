import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkmode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "black",
        transition: "background-color 0.5s, color 0.5s",
      }}
    >
      <Toggle />
      <div className={`fade ${darkMode ? "dark" : "light"}`}>
        <Intro />
      </div>
      <div className={`fade ${darkMode ? "dark" : "light"}`}>
        <About />
      </div>
      <div className={`fade ${darkMode ? "dark" : "light"}`}>
        <ProductList />
      </div>
      <div className={`fade ${darkMode ? "dark" : "light"}`}>
        <Contact />
      </div>
    </div>
  );
};

export default App;

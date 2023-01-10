import Quiz from "./Pages/Quiz/Quiz";
import GlobalStyle, { lightTheme, darkTheme } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    localStorage.getItem("theme") === "dark"
      ? setTheme("dark")
      : setTheme("light");
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Quiz toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;

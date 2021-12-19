import { createContext, useCallback, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

export const ThemeContext = createContext();

const themes = {
  dark: {
    color: "#d17272",
  },
  light: {
    color: "#fff",
  },
};

const themeMUI = {
  dark: createTheme({
    palette: {
      primary: {
        main: "#d17272",
      },
    },
  }),
  light: createTheme({
    palette: {
      glassmorphism: {
        shadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        color: "rgba( 206, 147, 216, 0.3 )",
        gradient:
          "linear-gradient(169deg, rgba(255, 216, 245, 0.7) 0%, rgba(225, 250, 255, 0.7) 100%)",
        blur: "blur( 4px )",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        radius: "10px",
      },
      text: {
        main: "#172c66",
        secondary: "#001858",
        heading: "rgba(31, 38, 135, 0.37)",
      },
    },
  }),
};

export const CustomThemeProvider = ({ children, initialTheme = "light" }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const themeSetter = useCallback((name) => {
    if (themes[name]) {
      setTheme({
        name,
        theme: themes[name],
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      <ThemeProvider theme={themeMUI[theme.name]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

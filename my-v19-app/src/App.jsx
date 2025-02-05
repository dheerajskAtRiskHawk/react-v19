import React, { createContext, useContext } from "react";

// 1. Create context
const ThemeContext = createContext("light");

// 2. Create provider and provider is updating the value to dark.
// const ThemeProvider = ({ children }) => {
//   return (
//     <ThemeContext.Provider value="dark">
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// 3. Create a component that uses the context
const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
};

// 4. Wrap the component tree with the provider
const App = () => {
  return (
    <ThemeContext value="dark">
      <ThemedComponent />
    </ThemeContext>
  );
};

export default App;

import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { GlobalProvider } from "./components/contexts/GlobalContext";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <AppNavigator />
      </GlobalProvider>
    </>
  );
};

export default App;

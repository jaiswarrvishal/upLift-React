import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import SidebarWithContentSeparator from "./components/SidebarWithContentSeparator";

function App() {
  return (
    <ThemeProvider>
      <SidebarWithContentSeparator />
      {/* Other components can go here */}
    </ThemeProvider>
  );
}

export default App;

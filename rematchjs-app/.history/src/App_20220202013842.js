import React, { useEffect } from "react";
import ProfileContainer from "./components/ProfileContainer";

function App() {
  useEffect(() => {
    document.title = "React Redux";
  }, []);

  return <ProfileContainer />;
}

export default App;

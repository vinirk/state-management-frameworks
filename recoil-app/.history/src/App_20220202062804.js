import React, { useEffect } from "react";
import ProfileContainer from "./components/ProfileContainer";

function App() {
  useEffect(() => {
    document.title = "React Recoil";
  }, []);

  return <ProfileContainer />;
}

export default App;

import React, { useEffect } from "react";
// import ProfileContainer from "./components/ProfileContainer";

function App() {
  useEffect(() => {
    document.title = "React Rematch";
  }, []);

  // return <ProfileContainer />;
  return <div>a</div>;
}

export default App;

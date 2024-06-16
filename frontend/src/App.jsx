import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage"; // import authentication page
import ChatsPage from "./ChatsPage"; // import chat page

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) { // if user does not exist, render authentication page
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else { // if user exists, render chat page
    return <ChatsPage user={user} />;
  }
}

export default App;
import './App.css'

import React from "react";

import UserContextProvider from "./Context/UserContextProvider";
import LogIn from "./Component/LogIn";
import Profile from "./Component/Profile";

const App = () => {

    return (
        <UserContextProvider>

            <LogIn />
            <Profile />

        </UserContextProvider>
    )
}

export default App;
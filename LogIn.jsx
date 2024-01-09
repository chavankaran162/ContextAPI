
import React, { useState, useContext } from "react";

import UserContext from "../Context/UserContext";

const LogIn = () => {

    const [username, setUserName] = useState()
    const [Password, setNewPassword] = useState()

    const { setUser } = useContext(UserContext)

    const SubmitHandler = (e) => {
        e.preventDefault()

        setUser({ username, Password })
    }

    return (
        <div className="wrapper">
            <h2>LogIn</h2>
            <input type="text" placeholder="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}


            />
            <input type="text" placeholder="Password" className="pass"
                value={Password}
                onChange={(e) => setNewPassword(e.target.value)}

            />
            <button onClick={SubmitHandler} className="btn">Submit</button>

        </div>
    )
}
export default LogIn;
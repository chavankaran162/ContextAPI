import UserContext from "../Context/UserContext";
import React, { useContext } from "react";

const Profile = () => {

    const { user } = useContext(UserContext)

    if (!user) return <div className="profile">Please LogIn</div>

    return <div className="profile">Welcome {user.username}</div>

}
export default Profile;
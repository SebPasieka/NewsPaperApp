import React from "react"
import { useHistory } from "react-router-dom"

const Logout = () => {
    const histroy = useHistory()

    const submitClick = () => {
        localStorage.removeItem("credentials");
        histroy.push("/login")
    }

    return (
        <div className="logoutObject">
            <button data-testid="logoutButton" onClick={submitClick}> logout </button>
        </div>
    )
}

export default Logout

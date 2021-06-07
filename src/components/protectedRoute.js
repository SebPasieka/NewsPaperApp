import React from "react"
import { Route, Redirect } from "react-router-dom"

function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest}) {
    return <Route {...rest}
              render={(props) => {
    if (isAuth == true) {
        return <Component {...props}/>
    } else {
        return <Redirect to={{pathname: "/login"}} />
    }
    }} />
}

export default ProtectedRoute
import React from "react"
import { Route, Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"
const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth0()
    return (
        <Route
            {...rest}
            render={() => {
                return user ? children : <Link to='/'></Link>
            }} ></Route>);
}

export default PrivateRoute;
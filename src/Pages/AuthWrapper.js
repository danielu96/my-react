import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCentercode } from "react-icons/fa";
import styled from 'styled-components'
const AuthWrapper = ({ children }) => {
    const { isLoading, error } = useAuth0()
    if (isLoading) {
        return (
            <Wrapper>
                <h1>Loading...</h1>
            </Wrapper>
        )
    }
    if (error) {
        return (
            <Wrapper>
                <h1>{error.message}</h1>
            </Wrapper>
        )
    }
    return <>{children}</>
}

const Wrapper = styled.section`
min-height: 100vh,
display: grid;
justify-content: center;
margin:auto;
`


export default AuthWrapper


import "./Login.css"
import React from "react"
const Login = () => {
    return (
        <form className="register">
            <h1>Login</h1>
            <input type="text" name="email" placeholder="Enter Email"  />
            <input type="text" name="password" placeholder="Enter password"  />

            <button type="submit" className="button">
                Submit
            </button>
        
        </form>
    );

}
export default Login;
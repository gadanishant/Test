const Login = () => {
    return (
        <>
            <h3>Login!</h3>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required></input>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder = "Enter your password" required/>
        
            <button type="submit">Submit</button>
        
        </>
    );
}

export default Login;
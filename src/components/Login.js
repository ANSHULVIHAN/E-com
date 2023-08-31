import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../store/apiCalls';
import { mobile } from '../components/responisve';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/4207708/pexels-photo-4207708.jpeg?auto=compress&cs=tinysrgb&w=600")
  center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  padding: 3px 8px;
  background-color: red;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const Error = styled.span`
  color: red;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flexDirection: 'column', alignItems: 'center' })}
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 5px;
`;

const ForgotPassword = styled.div`
  text-align: right;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await login(dispatch, { email, password }); // Assuming login updates the store
      Navigate.push('/product'); // Use "Navigate" instead of "Redirect"
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Error>Something went wrong...</Error>}

          <LinkContainer>
            <RememberMe>
              <RememberMeCheckbox type="checkbox" />
              <span>Remember me</span>
            </RememberMe>
            <ForgotPassword>
              <Link to="forget">Forgot Password?</Link>
            </ForgotPassword>
          </LinkContainer>

          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>

          <div className="login-link">
            Not Registered? <Link to="/signup">Signup</Link>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;


/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [username,SetUsername]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleForgotPasswordChange = (event) => {
    setForgotPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted with email:', email, 'and password:', password);
    // You can implement your authentication logic here
  };

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    console.log('Forgot password submitted with email:', forgotPassword);
    // Implement your forgot password logic here
  };

  return (
    <div className="App">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login to Your Account</h2>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
          <Link to="/forget" className='search'>Forgot Password</Link>
        <p>Don't have an account? <Link className='login-form' to="/signup">Sign up</Link></p>
        </form>
     
      </div>
    </div>
  );
}

export default Login;
*/
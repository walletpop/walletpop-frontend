import { useState } from "react";
import { useLocation } from 'react-router-dom';
import {registerUser, signIn} from "../utils/resgisterUser";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";

export default function Register(props) {

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [error, setError] = useState(null);
  const [password, setPassword] = useState();

  async function submitRegister(event) {
    event.preventDefault()
    const newUser = {
      password: password,
      email:email
    }

    try {
      if(location.pathname === '/register'){
        let result = await registerUser(newUser);
        if(result.message){
          setError(result.message)
        } else {
          setError(null);
          navigate("/signin");
        }
      } else {
        let result = await signIn(newUser);
        if(result.message){
          setError(result.message)
        } else {
          setError(null);
          navigate("/personal");
        }
        setEmail(null);
        setPassword(null);
      }

    } catch (error) {
      setError("Something happen! please try again!");
    }
  }

  return(
    <div>
      <form onSubmit={submitRegister}>
        <label>email: </label><br></br>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br></br>
        <label>password: </label><br></br>
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br></br>
        <button type="submit">{location.pathname === '/signin' ? 'Sign in' : 'Register'}</button>
      </form>
      {error !== null && <Alert variant='danger'>
          {error}
      </Alert>}
    </div>
  )
}

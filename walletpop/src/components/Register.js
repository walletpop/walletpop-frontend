import { useState } from "react"
import registerUser from "../utils/resgisterUser";

export default function Register(props) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function submitRegister(event) {
    event.preventDefault()
    const newUser = {
      password: password,
      email:email
    }

    try {
      registerUser(newUser);
      console.log("Registration completed successfully");
      console.log("LogIn to start using the app");
    } catch (error) {
      console.log("username already exists");
    }
  }

  return(
    <div>
      <form onSubmit={submitRegister}>
        <label>email: </label><br></br>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br></br>
        <label>password: </label><br></br>
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br></br>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

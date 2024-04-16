// import { useState } from "react";

const LoginForm = ({isLogged, setIsLogged}) => {

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    // setEmail("")
    // setPassword("")
    setIsLogged(!isLogged)
  }

  return (
    <form onSubmit={handleSubmit} className="container login mt-5 ">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}


        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          required
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;

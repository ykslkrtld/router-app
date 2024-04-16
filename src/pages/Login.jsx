import LoginForm from "../components/LoginForm"

const Login = ({isLogged, setIsLogged}) => {
  return (
    <LoginForm isLogged={isLogged} setIsLogged={setIsLogged} />
  )
}

export default Login